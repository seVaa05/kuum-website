import { projects } from '../data/projects'
import type { Project } from '../types/project'

export const projectService = {
  async getProjects(): Promise<Project[]> {
    return projects
  },
  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    return projects.find((project) => project.slug === slug)
  },
}
