export type ProjectStatus = 'AKTIVAN' | 'U_PRIPREMI' | 'ZAVRSEN'

export interface Project {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string[]
  coverImage: string
  status: ProjectStatus
  startDate: string
  endDate?: string
  gallery?: string[]
}
