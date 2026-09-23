import { images } from './images'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'pr1',
    title: 'Filmski festival - KUUM Fest',
    slug: 'filmski-festival-kuum-fest',
    shortDescription: 'FILMSKI OMLADINSKI FESTIVAL - KUUM FEST je prestižna manifestacija posvećena mladim filmskim stvaraocima.',
    description: ['FILMSKI OMLADINSKI FESTIVAL - KUUM FEST je prestižna manifestacija posvećena mladim filmskim stvaraocima.', 'Festival pruža platformu za prikazivanje inovativnih i kreativnih radova mladih talenata iz celog sveta. Uz bogat program radionica, seminara i panel diskusija, KUUM FEST promoviše kulturni dijalog i profesionalni razvoj učesnika.'],
    coverImage: images.project,
    status: 'AKTIVAN',
    startDate: '2025-09-01',
    gallery: [images.event, images.history],
  },
  {
    id: 'pr2',
    title: 'KUUM Pub Quiz',
    slug: 'kuum-pub-quiz',
    shortDescription: 'Pridruži se KUUM PUB KVIZU za veče ispunjeno smehom, prijateljskim nadmetanjem i pitanjima.',
    description: ['Pridruži se KUUM PUB KVIZU za veče ispunjeno smehom, prijateljskim nadmetanjem i pitanjima koja će ti zaintrigirati mozak.', 'Bilo da si početnik u triviji ili iskusni kviz znalac, naše kviz veče nudi nešto za svakoga!'],
    coverImage: images.projectQuiz,
    status: 'AKTIVAN',
    startDate: '2026-01-15',
  },
  {
    id: 'pr3',
    title: 'Poetsko veče mladih pesnika',
    slug: 'poetsko-vece-mladih-pesnika-projekat',
    shortDescription: 'Savršeno mesto za sve ljubitelje poezije i podršku novim pesničkim glasovima.',
    description: ['POETSKO VEČE MLADIH PESNIKA je savršeno mesto za sve ljubitelje poezije.', 'Upoznajte nove pesničke glasove i podržite mlade stvaraoce dok dele svoj rad sa publikom željnom novih i originalnih stihova.'],
    coverImage: images.projectPoetry,
    status: 'U_PRIPREMI',
    startDate: '2026-03-01',
  },
]
