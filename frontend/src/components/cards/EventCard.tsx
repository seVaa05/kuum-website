import { CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { KuumEvent } from '../../types/event'
import { formatDate } from '../../utils/format'

export function EventCard({ event }: { event: KuumEvent }) {
  const eventDate = new Date(event.startDate)
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(eventDate)
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(eventDate)

  return (
    <article className="card event-card">
      <Link to={`/dogadjaji/${event.slug}`} className="media-link">
        <img src={event.coverImage} alt="" />
        <span className="date-badge"><strong>{day}</strong>{month}</span>
      </Link>
      <div className="card-body">
        <p className="tag">{event.eventType.replaceAll('_', ' ')}</p>
        <h3><Link to={`/dogadjaji/${event.slug}`}>{event.title}</Link></h3>
        <p>{event.shortDescription}</p>
        <p className="icon-line"><CalendarDays size={17} /> {formatDate(event.startDate)} {event.startTime && `u ${event.startTime}`}</p>
        <p className="icon-line"><MapPin size={17} /> {event.location}</p>
        <Link className="text-link" to={`/dogadjaji/${event.slug}`}>PROČITAJ VIŠE</Link>
      </div>
    </article>
  )
}
