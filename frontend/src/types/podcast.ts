export interface PodcastEpisode {
  id: string
  title: string
  slug: string
  seasonNumber: number
  episodeNumber: number
  shortDescription: string
  description: string[]
  thumbnail: string
  videoUrl: string
  publishedAt: string
  guest?: string
}
