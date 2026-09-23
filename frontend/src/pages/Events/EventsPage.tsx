import { useEffect, useMemo, useState } from 'react'
import { EventCard } from '../../components/cards/EventCard'
import { EventsCalendar } from '../../components/calendar/EventsCalendar'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { SectionTitle } from '../../components/common/SectionTitle'
import { usePageTitle } from '../../hooks/usePageTitle'
import { eventService } from '../../services/eventService'
import type { KuumEvent } from '../../types/event'

export function EventsPage() {
  usePageTitle('KUUM | Događaji')
  const [events, setEvents] = useState<KuumEvent[]>()
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  useEffect(() => {
    eventService.getEvents().then(setEvents)
  }, [])

  const { upcoming, past } = useMemo(() => {
    const sourceEvents = events ?? []
    const now = new Date()
    return {
      upcoming: sourceEvents.filter((event) => new Date(event.startDate) >= now),
      past: sourceEvents.filter((event) => new Date(event.startDate) < now),
    }
  }, [events])

  if (!events) return <LoadingState />

  const visibleEvents = activeTab === 'upcoming' ? upcoming : past

  return (
    <>
      <section className="section">
        <Container>
          <SectionTitle title="Događaji" />
          <EventsCalendar events={events} />
        </Container>
      </section>
      <section className="section section--soft">
        <Container>
          <SectionTitle title="Događaji" />
          <div className="event-tabs" role="tablist" aria-label="Filter događaja">
            <button className={activeTab === 'upcoming' ? 'is-active' : ''} type="button" role="tab" aria-selected={activeTab === 'upcoming'} onClick={() => setActiveTab('upcoming')}>
              Upcoming Events
            </button>
            <button className={activeTab === 'past' ? 'is-active' : ''} type="button" role="tab" aria-selected={activeTab === 'past'} onClick={() => setActiveTab('past')}>
              Past Events
            </button>
          </div>
          <div className="event-list">{visibleEvents.map((event) => <EventCard key={event.id} event={event} />)}</div>
        </Container>
      </section>
    </>
  )
}
