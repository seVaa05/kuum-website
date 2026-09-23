export type EventType =
  | 'PREDSTAVA'
  | 'FESTIVAL'
  | 'RADIONICA'
  | 'TRIBINA'
  | 'KNJIZEVNO_VECE'
  | 'KONCERT'
  | 'IZLOZBA'
  | 'OSTALO'

export interface KuumEvent {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string[]
  startDate: string
  startTime?: string
  endDate?: string
  endTime?: string
  location: string
  coverImage: string
  eventType: EventType
  ticketUrl?: string
}
