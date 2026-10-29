import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = '',
  titleTag: TitleTag = 'h2'
}) {
  return (
    <div 
      className={`section-heading ${centered ? 'text-center' : ''} ${className}`}
      style={{
        maxWidth: centered ? '760px' : '820px',
        margin: centered ? '0 auto 3rem auto' : '0 0 2.5rem 0',
        textAlign: centered ? 'center' : 'left'
      }}
    >
      {eyebrow && (
        <div className={`eyebrow ${dark ? 'eyebrow-dark' : ''}`}>
          {eyebrow}
        </div>
      )}
      <TitleTag 
        style={{
          marginBottom: subtitle ? '1rem' : '0',
          color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)'
        }}
      >
        {title}
      </TitleTag>
      {subtitle && (
        <p 
          className="lead"
          style={{
            color: dark ? 'var(--text-on-dark-secondary)' : 'var(--text-secondary)'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
