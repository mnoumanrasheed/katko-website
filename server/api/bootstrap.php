<?php
/**
 * Shared private configuration loader for the cPanel contact endpoints.
 *
 * This file must live in the cPanel account home directory, never in
 * public_html. For a standard installation it is /home/CPANEL_USER/katko-config.php.
 */
declare(strict_types=1);

function katko_load_config(): array
{
    $configPath = getenv('KATKO_CONFIG_PATH');
    $candidatePaths = [];
    if ($configPath && is_string($configPath)) {
        $candidatePaths[] = $configPath;
    } else {
        // Normal cPanel layout: /home/USER/public_html/api -> /home/USER/katko-config.php
        $candidatePaths[] = dirname(__DIR__, 2) . '/katko-config.php';

        // Addon domains can have a document root such as
        // /home/USER/public_html/example.com. Locate the cPanel home folder
        // from the public_html segment so the same private file still works.
        $documentRoot = !empty($_SERVER['DOCUMENT_ROOT']) ? realpath($_SERVER['DOCUMENT_ROOT']) : false;
        if ($documentRoot) {
            $publicHtmlPosition = strpos(str_replace('\\', '/', $documentRoot), '/public_html');
            if ($publicHtmlPosition !== false) {
                $cPanelHome = substr(str_replace('\\', '/', $documentRoot), 0, $publicHtmlPosition);
                $candidatePaths[] = $cPanelHome . '/katko-config.php';
            }
        }
    }

    $realConfigPath = false;
    foreach (array_unique($candidatePaths) as $candidatePath) {
        $resolvedPath = realpath($candidatePath);
        if ($resolvedPath && is_file($resolvedPath) && is_readable($resolvedPath)) {
            $realConfigPath = $resolvedPath;
            break;
        }
    }

    if (!$realConfigPath) {
        throw new RuntimeException('Private configuration is unavailable.');
    }

    $documentRoot = !empty($_SERVER['DOCUMENT_ROOT']) ? realpath($_SERVER['DOCUMENT_ROOT']) : false;
    if ($documentRoot && str_starts_with($realConfigPath, $documentRoot)) {
        throw new RuntimeException('Private configuration must not be stored in public_html.');
    }

    $values = require $realConfigPath;
    if (!is_array($values)) {
        throw new RuntimeException('Private configuration is invalid.');
    }

    $GLOBALS['katko_private_config_directory'] = dirname($realConfigPath);
    return $values;
}

function katko_private_directory(): string
{
    return $GLOBALS['katko_private_config_directory'] ?? dirname(__DIR__, 2);
}
