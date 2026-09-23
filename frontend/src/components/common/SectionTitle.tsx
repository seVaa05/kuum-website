interface SectionTitleProps {
  eyebrow?: string
  title: string
  action?: React.ReactNode
}

export function SectionTitle({ eyebrow, title, action }: SectionTitleProps) {
  return (
    <div className="section-title">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        <span className="section-rule" aria-hidden="true" />
      </div>
      {action}
    </div>
  )
}
