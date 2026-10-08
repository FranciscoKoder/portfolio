// Primitivos pequenos do design system. Cada um faz uma coisa só.

// Rótulo mono em caixa alta — usado em índices, metadados e eyebrows.
export function Label({ as = 'span', className = '', children, ...rest }) {
  const Component = as
  return (
    <Component className={`label ${className}`.trim()} {...rest}>
      {children}
    </Component>
  )
}

// Etiqueta de tecnologia/categoria. variant: 'default' | 'accent' | 'outline'
export function Tag({ variant = 'default', children }) {
  return <span className={`tag tag--${variant}`}>{children}</span>
}

// "LED" de status. status: 'online' | 'busy' | 'offline'
export function StatusDot({ status = 'online', pulse = true, children }) {
  return (
    <span className="status">
      <span className={`status__dot status__dot--${status}`} data-pulse={pulse} aria-hidden="true" />
      {children && <span className="status__label">{children}</span>}
    </span>
  )
}

// Número de destaque com legenda curta.
export function Metric({ value, label }) {
  return (
    <div className="metric">
      <span className="metric__value">{value}</span>
      <span className="metric__label">{label}</span>
    </div>
  )
}

// Superfície com borda fina. interactive=true adiciona hover.
export function Card({ as = 'div', interactive = false, className = '', children, ...rest }) {
  const Component = as
  const classes = ['card', interactive && 'card--interactive', className].filter(Boolean).join(' ')
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}

// Cabeçalho de seção: índice numerado + título + descrição opcional.
export function SectionHeader({ index, title, description, id }) {
  return (
    <header className="section-header">
      <Label className="section-header__index">{index}</Label>
      <div>
        <h2 id={id} className="section-header__title">
          {title}
        </h2>
        {description && <p className="section-header__desc">{description}</p>}
      </div>
    </header>
  )
}
