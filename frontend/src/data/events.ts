import { images } from './images'
import type { KuumEvent } from '../types/event'

export const events: KuumEvent[] = [
  {
    id: 'e1',
    title: 'The Festival',
    slug: 'the-festival',
    shortDescription: 'This an event article, used for writing about and listing the events planned for the future on your website.',
    description: ['This an event article, used for writing about and listing the events planned for the future on your website.', 'You can edit all of this text from the Pages tab by clicking the edit button.'],
    startDate: '2026-08-18T20:00:00',
    startTime: '20:00',
    location: '3557 Pretty View Lane, Alderpoint CA',
    coverImage: images.event,
    eventType: 'FESTIVAL',
    ticketUrl: '#',
  },
  {
    id: 'e2',
    title: 'The Big Conference',
    slug: 'the-big-conference',
    shortDescription: 'This an event article, used for writing about and listing the events planned for the future on your website.',
    description: ['This an event article, used for writing about and listing the events planned for the future on your website.', 'You can edit all of this text from the Pages tab by clicking the edit button.'],
    startDate: '2026-11-30T20:00:00',
    startTime: '20:00',
    location: '2816 Cinamon Lane, San Antonio, TX',
    coverImage: images.eventAlt,
    eventType: 'RADIONICA',
  },
  {
    id: 'e3',
    title: 'The Annual Convention',
    slug: 'the-annual-convention',
    shortDescription: 'This an event article, used for writing about and listing the events planned for the future on your website.',
    description: ['This an event article, used for writing about and listing the events planned for the future on your website.', 'You can edit all of this text from the Pages tab by clicking the edit button.'],
    startDate: '2026-12-25T21:00:00',
    startTime: '21:00',
    location: '1684 Wildrose Lane, Detroit, MI',
    coverImage: images.eventThird,
    eventType: 'KNJIZEVNO_VECE',
  },
]
