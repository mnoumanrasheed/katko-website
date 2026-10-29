import React from 'react';

export default function Badge({
  children,
  variant = 'orange', // 'orange' | 'amber' | 'charcoal'
  className = '',
  icon
}) {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
