import { useEffect, useState } from 'react'
import { ArticleCard } from '../../components/cards/ArticleCard'
import { Container } from '../../components/common/Container'
import { EmptyState } from '../../components/common/EmptyState'
import { LoadingState } from '../../components/common/LoadingState'
import { PageHeader } from '../../components/common/PageHeader'
import { usePageTitle } from '../../hooks/usePageTitle'
import { articleService } from '../../services/articleService'
import type { Article } from '../../types/article'
import { formatDate } from '../../utils/format'
import { Link } from 'react-router-dom'

export function BlogPage() {
  usePageTitle('KUUM | Blog')
  const [articles, setArticles] = useState<Article[]>()

  useEffect(() => {
    articleService.getArticles().then(setArticles)
  }, [])

  if (!articles) return <LoadingState />
  if (articles.length === 0) return <EmptyState />

  const [featured, ...rest] = articles

  return (
    <>
      <PageHeader title="KUUM BLOG" />
      <section className="section">
        <Container>
          <article className="featured">
            <img src={featured.coverImage} alt="" />
            <div>
              <p className="meta">{featured.category} / {formatDate(featured.publishedAt)}</p>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <Link className="button" to={`/blog/${featured.slug}`}>Pročitaj više</Link>
            </div>
          </article>
          <div className="grid grid--3">{rest.map((article) => <ArticleCard key={article.id} article={article} />)}</div>
        </Container>
      </section>
    </>
  )
}
