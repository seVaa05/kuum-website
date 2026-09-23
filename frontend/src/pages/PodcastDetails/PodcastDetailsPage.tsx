import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PodcastCard } from '../../components/cards/PodcastCard'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { YouTubeEmbed } from '../../components/media/YouTubeEmbed'
import { usePageTitle } from '../../hooks/usePageTitle'
import { podcastService } from '../../services/podcastService'
import type { PodcastEpisode } from '../../types/podcast'
import { episodeCode, formatDate } from '../../utils/format'
import { NotFoundPage } from '../NotFound/NotFoundPage'

export function PodcastDetailsPage() {
  const { slug = '' } = useParams()
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>()
  const episode = episodes?.find((item) => item.slug === slug)
  usePageTitle(episode ? `${episode.title} | KUUM` : 'KUUM | Podcast')

  useEffect(() => {
    podcastService.getEpisodes().then(setEpisodes)
  }, [])

  if (!episodes) return <LoadingState />
  if (!episode) return <NotFoundPage />

  return (
    <section className="section">
      <Container className="narrow">
        <Link className="text-link" to="/podcast">Nazad na podcast</Link>
        <p className="meta">{episodeCode(episode)} / {formatDate(episode.publishedAt)}</p>
        <h1>{episode.title}</h1>
        {episode.guest && <p className="tag">Gost: {episode.guest}</p>}
        <YouTubeEmbed url={episode.videoUrl} title={episode.title} />
        <div className="article-content">{episode.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </Container>
      <Container>
        <h2>Povezane epizode</h2>
        <div className="grid grid--3">{episodes.filter((item) => item.id !== episode.id).slice(0, 3).map((item) => <PodcastCard key={item.id} episode={item} />)}</div>
      </Container>
    </section>
  )
}
