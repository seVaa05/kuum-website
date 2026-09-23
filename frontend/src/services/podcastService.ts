import { podcasts } from '../data/podcasts'
import type { PodcastEpisode } from '../types/podcast'

export const podcastService = {
  async getEpisodes(): Promise<PodcastEpisode[]> {
    return podcasts
  },
  async getEpisodeBySlug(slug: string): Promise<PodcastEpisode | undefined> {
    return podcasts.find((episode) => episode.slug === slug)
  },
}
