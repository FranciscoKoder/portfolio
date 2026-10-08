// Botão / link com aparência de botão.
// variant: 'primary' (tinta) | 'secondary' (contorno) | 'ghost' (só texto)
// size: 'sm' | 'md'
export function Button({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  icon,
  iconPosition = 'end',
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && iconPosition === 'start' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'end' && icon}
    </>
  )

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {}
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
