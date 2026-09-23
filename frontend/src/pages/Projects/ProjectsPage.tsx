import { useEffect, useState } from 'react'
import { ProjectCard } from '../../components/cards/ProjectCard'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { PageHeader } from '../../components/common/PageHeader'
import { usePageTitle } from '../../hooks/usePageTitle'
import { projectService } from '../../services/projectService'
import type { Project } from '../../types/project'

export function ProjectsPage() {
  usePageTitle('KUUM | Projekti')
  const [projects, setProjects] = useState<Project[]>()

  useEffect(() => {
    projectService.getProjects().then(setProjects)
  }, [])

  if (!projects) return <LoadingState />

  return (
    <>
      <PageHeader title="PROJEKTI" />
      <section className="section">
        <Container>
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        </Container>
      </section>
    </>
  )
}
