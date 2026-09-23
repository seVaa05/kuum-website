# KUUM frontend

Frontend aplikacija za KUUM (Kulturno-umetničko udruženje mladih). Projekat je React/Vite javni sajt, bez backend-a, baze, autentifikacije ili server-side API-ja.

## Tehnologije

- React
- Vite
- TypeScript
- React Router
- Axios
- FullCalendar
- Lucide React
- CSS organizovan u `src/styles/global.css`

## Pokretanje

```bash
npm install
npm run dev
```

Build provera:

```bash
npm run build
```

## Struktura

- `src/pages` - stranice i detail rute
- `src/components` - layout, kartice, stanja, kalendar i media komponente
- `src/data` - mock podaci za članke, događaje, podcast, projekte, ljude i partnere
- `src/services` - servisni sloj koji trenutno vraća mock podatke
- `src/types` - TypeScript modeli domena
- `src/lib/api.ts` - Axios instanca za budući REST API
- `src/router/router.tsx` - frontend rute
- `src/styles/global.css` - globalni vizuelni sistem i responsive stilovi

## Backend integracija kasnije

Komponente ne čitaju mock podatke direktno. Podaci se dobijaju kroz servise, na primer:

```ts
eventService.getEvents()
articleService.getArticles()
podcastService.getEpisodes()
```

Kada Spring Boot backend bude spreman, implementacije u `src/services` mogu da se zamene Axios pozivima, bez menjanja page komponenti:

```ts
const response = await api.get('/events')
return response.data
```

API base URL je pripremljen u `src/lib/api.ts` i koristi promenljivu:

```bash
VITE_API_URL=http://localhost:8080/api
```

Ako promenljiva nije postavljena, podrazumevana vrednost je `http://localhost:8080/api`.

## Rute

- `/`
- `/o-nama`
- `/blog`
- `/blog/:slug`
- `/podcast`
- `/podcast/:slug`
- `/dogadjaji`
- `/dogadjaji/:slug`
- `/projekti`
- `/projekti/:slug`
- `/ljudi`
- `/kontakt`

404 stranica je uključena.
