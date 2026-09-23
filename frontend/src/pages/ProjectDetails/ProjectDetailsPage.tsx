import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectCard } from '../../components/cards/ProjectCard'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { SectionTitle } from '../../components/common/SectionTitle'
import { usePageTitle } from '../../hooks/usePageTitle'
import { projectService } from '../../services/projectService'
import type { Project } from '../../types/project'
import { NotFoundPage } from '../NotFound/NotFoundPage'

export function ProjectDetailsPage() {
  const { slug = '' } = useParams()
  const [projects, setProjects] = useState<Project[]>()
  const project = projects?.find((item) => item.slug === slug)
  usePageTitle(project ? `${project.title} | KUUM` : 'KUUM | Projekti')

  useEffect(() => {
    projectService.getProjects().then(setProjects)
  }, [])

  if (!projects) return <LoadingState />
  if (!project) return <NotFoundPage />

  return (
    <article className="detail-page">
      <img className="detail-image" src={project.coverImage} alt="" />
      <Container className="narrow">
        <Link className="text-link" to="/projekti">Nazad na projekte</Link>
        <p className="tag">{project.status.replaceAll('_', ' ')}</p>
        <h1>{project.title}</h1>
        <div className="article-content">{project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </Container>
      {project.gallery && (
        <Container>
          <SectionTitle title="Galerija" />
          <div className="grid grid--2">{project.gallery.map((image) => <img className="gallery-image" key={image} src={image} alt="" />)}</div>
        </Container>
      )}
      <Container>
        <SectionTitle title="Srodni projekti" />
        <div className="project-list">{projects.filter((item) => item.id !== project.id).map((item) => <ProjectCard key={item.id} project={item} />)}</div>
      </Container>
    </article>
  )
}
