import { Container } from './Container'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  dark?: boolean
}

export function PageHeader({ eyebrow, title, description, dark = false }: PageHeaderProps) {
  return (
    <header className={`page-header ${dark ? 'page-header--dark' : ''}`}>
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <span className="section-rule" aria-hidden="true" />
        {description && <p className="lead">{description}</p>}
      </Container>
    </header>
  )
}
