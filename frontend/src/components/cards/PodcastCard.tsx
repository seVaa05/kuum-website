import { Link } from 'react-router-dom'
import type { PodcastEpisode } from '../../types/podcast'
import { episodeCode, formatDate } from '../../utils/format'

export function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <article className="card podcast-card">
      <Link to={`/podcast/${episode.slug}`} className="media-link">
        <img src={episode.thumbnail} alt="" />
      </Link>
      <div className="card-body">
        <p className="meta">{episodeCode(episode)} / {formatDate(episode.publishedAt)}</p>
        <h3><Link to={`/podcast/${episode.slug}`}>{episode.title}</Link></h3>
        {episode.guest && <p className="tag">Gost: {episode.guest}</p>}
        <p>{episode.shortDescription}</p>
      </div>
    </article>
  )
}
