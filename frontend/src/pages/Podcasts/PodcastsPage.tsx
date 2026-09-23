import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PodcastCard } from '../../components/cards/PodcastCard'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { PageHeader } from '../../components/common/PageHeader'
import { usePageTitle } from '../../hooks/usePageTitle'
import { podcastService } from '../../services/podcastService'
import type { PodcastEpisode } from '../../types/podcast'
import { episodeCode, formatDate } from '../../utils/format'

export function PodcastsPage() {
  usePageTitle('KUUM | Podcast')
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>()

  useEffect(() => {
    podcastService.getEpisodes().then(setEpisodes)
  }, [])

  if (!episodes) return <LoadingState />
  const [featured, ...rest] = episodes

  return (
    <>
      <PageHeader title="KUP - KULTURNO-UMETNIČKI PODCAST" dark />
      <section className="section">
        <Container>
          <article className="featured featured--podcast">
            <img src={featured.thumbnail} alt="" />
            <div>
              <p className="meta">{episodeCode(featured)} / {formatDate(featured.publishedAt)}</p>
              <h2>{featured.title}</h2>
              {featured.guest && <p className="tag">Gost: {featured.guest}</p>}
              <p>{featured.shortDescription}</p>
              <Link className="button" to={`/podcast/${featured.slug}`}>Pogledaj epizodu</Link>
            </div>
          </article>
          <div className="grid grid--3">{rest.map((episode) => <PodcastCard key={episode.id} episode={episode} />)}</div>
        </Container>
      </section>
    </>
  )
}
