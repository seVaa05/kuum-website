import { Link } from 'react-router-dom'
import type { Article } from '../../types/article'
import { formatDate } from '../../utils/format'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card editorial-card">
      <Link to={`/blog/${article.slug}`} className="media-link" aria-label={article.title}>
        <img src={article.coverImage} alt="" />
      </Link>
      <div className="card-body">
        <p className="meta">{article.category} / {formatDate(article.publishedAt)}</p>
        <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="text-link" to={`/blog/${article.slug}`}>Pročitaj više</Link>
      </div>
    </article>
  )
}
