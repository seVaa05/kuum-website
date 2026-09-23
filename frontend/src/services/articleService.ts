import { articles } from '../data/articles'
import type { Article } from '../types/article'

export const articleService = {
  async getArticles(): Promise<Article[]> {
    return articles
  },
  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return articles.find((article) => article.slug === slug)
  },
}
