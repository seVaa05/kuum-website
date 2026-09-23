import { Link } from 'react-router-dom'
import type { Project } from '../../types/project'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link to={`/projekti/${project.slug}`} className="media-link">
        <img src={project.coverImage} alt="" />
      </Link>
      <div>
        <h3><Link to={`/projekti/${project.slug}`}>{project.title}</Link></h3>
        <span className="card-rule" aria-hidden="true" />
        <p>{project.shortDescription}</p>
      </div>
    </article>
  )
}
