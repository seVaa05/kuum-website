import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import { useNavigate } from 'react-router-dom'
import type { KuumEvent } from '../../types/event'

export function EventsCalendar({ events }: { events: KuumEvent[] }) {
  const navigate = useNavigate()

  return (
    <div className="calendar-shell">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{ left: 'prev,next today', center: 'title', right: '' }}
        buttonText={{ today: 'Danas' }}
        height="auto"
        events={events.map((event) => ({ id: event.id, title: event.title, start: event.startDate, end: event.endDate, extendedProps: { slug: event.slug } }))}
        eventClick={(info) => navigate(`/dogadjaji/${info.event.extendedProps.slug}`)}
        eventDisplay="block"
        fixedWeekCount={false}
      />
    </div>
  )
}
