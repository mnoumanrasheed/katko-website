import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'secondary-dark' | 'amber'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = `btn btn-${variant} ${size !== 'md' ? `btn-${size}` : ''} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  // Handle in-page smooth scrolling anchor links (#id)
  if (to && to.startsWith('#')) {
    const handleAnchorClick = (e) => {
      e.preventDefault();
      if (onClick) onClick(e);
      try {
        const element = document.querySelector(to);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
          window.history.pushState(null, '', to);
        }
      } catch {
        // fallback
      }
    };

    return (
      <a href={to} className={classes} onClick={handleAnchorClick} {...props}>
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
