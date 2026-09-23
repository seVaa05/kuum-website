import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { NotFoundPage } from '../NotFound/NotFoundPage'
import { usePageTitle } from '../../hooks/usePageTitle'
import { articleService } from '../../services/articleService'
import type { Article } from '../../types/article'
import { formatDate } from '../../utils/format'

export function BlogDetailsPage() {
  const { slug = '' } = useParams()
  const [article, setArticle] = useState<Article | null>()
  usePageTitle(article ? `${article.title} | KUUM` : 'KUUM | Blog')

  useEffect(() => {
    articleService.getArticleBySlug(slug).then((result) => setArticle(result ?? null))
  }, [slug])

  if (article === undefined) return <LoadingState />
  if (article === null) return <NotFoundPage />

  return (
    <article className="article-page">
      <Container className="narrow">
        <Link className="text-link back-link" to="/blog"><ArrowLeft size={17} /> Nazad na blog</Link>
        <p className="meta">{article.category} / {formatDate(article.publishedAt)} / {article.author}</p>
        <h1>{article.title}</h1>
        <p className="lead">{article.excerpt}</p>
      </Container>
      <img className="detail-image" src={article.coverImage} alt="" />
      <Container className="article-content narrow">
        {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Container>
    </article>
  )
}
