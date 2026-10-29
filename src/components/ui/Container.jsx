import React from 'react';

export default function Container({
  children,
  narrow = false,
  className = '',
  ...props
}) {
  return (
    <div className={`${narrow ? 'container-narrow' : 'container'} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
