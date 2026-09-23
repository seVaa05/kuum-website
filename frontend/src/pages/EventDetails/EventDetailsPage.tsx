import { CalendarDays, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { usePageTitle } from '../../hooks/usePageTitle'
import { eventService } from '../../services/eventService'
import type { KuumEvent } from '../../types/event'
import { formatDate } from '../../utils/format'
import { NotFoundPage } from '../NotFound/NotFoundPage'

export function EventDetailsPage() {
  const { slug = '' } = useParams()
  const [event, setEvent] = useState<KuumEvent | null>()
  usePageTitle(event ? `${event.title} | KUUM` : 'KUUM | Događaji')

  useEffect(() => {
    eventService.getEventBySlug(slug).then((result) => setEvent(result ?? null))
  }, [slug])

  if (event === undefined) return <LoadingState />
  if (event === null) return <NotFoundPage />

  return (
    <article className="detail-page">
      <img className="detail-image" src={event.coverImage} alt="" />
      <Container className="narrow">
        <Link className="text-link" to="/dogadjaji">Nazad na događaje</Link>
        <p className="tag">{event.eventType.replaceAll('_', ' ')}</p>
        <h1>{event.title}</h1>
        <div className="detail-meta">
          <p className="icon-line"><CalendarDays size={18} /> {formatDate(event.startDate)} {event.startTime && `u ${event.startTime}`}</p>
          <p className="icon-line"><MapPin size={18} /> {event.location}</p>
        </div>
        <div className="article-content">{event.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        {event.ticketUrl && <a className="button" href={event.ticketUrl}>Kupi kartu</a>}
      </Container>
    </article>
  )
}
