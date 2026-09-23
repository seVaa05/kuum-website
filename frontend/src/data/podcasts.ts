import { images } from './images'
import type { PodcastEpisode } from '../types/podcast'

export const podcasts: PodcastEpisode[] = [
  {
    id: 'p1',
    title: 'Mladi autori i prva publika',
    slug: 'mladi-autori-i-prva-publika',
    seasonNumber: 1,
    episodeNumber: 1,
    shortDescription: 'Razgovor o prvom javnom nastupu, tremi i publici koja ume da sluša.',
    description: ['U prvoj epizodi KUP-a govorimo o tome kako mladi autori dolaze do prve publike.', 'Tema su otvorene scene, konkursi, neuspešne probe i trenuci u kojima se ideja prvi put izgovori naglas.'],
    thumbnail: images.podcast,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    publishedAt: '2026-04-10',
    guest: 'Lena Stojanović',
  },
  {
    id: 'p2',
    title: 'Nezavisni film bez izgovora',
    slug: 'nezavisni-film-bez-izgovora',
    seasonNumber: 1,
    episodeNumber: 2,
    shortDescription: 'Kako se snima film kada ekipa ima više volje nego budžeta.',
    description: ['Epizoda prati put od prve ideje do festivalske prijave.', 'Gost objašnjava zašto su ograničenja često dobar okvir za jasniju filmsku odluku.'],
    thumbnail: images.event,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    publishedAt: '2026-05-02',
    guest: 'Vuk Ilić',
  },
  {
    id: 'p3',
    title: 'Pozorište kao timski sport',
    slug: 'pozoriste-kao-timski-sport',
    seasonNumber: 1,
    episodeNumber: 3,
    shortDescription: 'Probe, poverenje i disciplina iza jedne omladinske predstave.',
    description: ['Razgovaramo o pozorišnom procesu iz ugla mladih glumaca i reditelja.', 'Posebno se bavimo odnosom ansambla, organizacijom proba i odgovornošću prema publici.'],
    thumbnail: images.history,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    publishedAt: '2026-06-18',
    guest: 'Mina Đorđević',
  },
]
