import { events } from '../data/events'
import type { KuumEvent } from '../types/event'

export const eventService = {
  async getEvents(): Promise<KuumEvent[]> {
    return events
  },
  async getEventBySlug(slug: string): Promise<KuumEvent | undefined> {
    return events.find((event) => event.slug === slug)
  },
}
