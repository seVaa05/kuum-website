import { Link } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { usePageTitle } from '../../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('404 | KUUM')

  return (
    <section className="not-found">
      <Container>
        <p className="eyebrow">404</p>
        <h1>Stranica nije pronađena.</h1>
        <Link className="button" to="/">Nazad na početnu</Link>
      </Container>
    </section>
  )
}
