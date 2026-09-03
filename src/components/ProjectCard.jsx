import { ArrowUpRight, Hammer } from 'lucide-react';
import { GithubIcon } from './icons';
import './ProjectCard.css';

export default function ProjectCard({ project, onOpen, style, className = '' }) {
  const isDeveloping = project.status === 'developing';

  return (
    <article
      className={`project-card reveal ${isDeveloping ? 'project-card-developing' : ''} ${className}`}
      style={style}
    >
      <button className="project-card-hit" onClick={() => onOpen(project)} aria-label={`View details for ${project.name}`} />

      <div className="project-card-top">
        <span className={`project-status ${isDeveloping ? 'status-developing' : 'status-live'}`}>
          {isDeveloping ? (
            <>
              <Hammer size={12} /> Developing / Concept
            </>
          ) : (
            'Completed'
          )}
        </span>
        <span className="project-tech">{project.tech}</span>
      </div>

      <h3 className="project-card-title">{project.name}</h3>
      <p className="project-card-desc">{project.shortDescription}</p>

      <ul className="project-card-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-card-actions">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={15} /> Repository
          </a>
        )}
        <span className="project-card-link project-card-view">
          Details <ArrowUpRight size={15} />
        </span>
      </div>
    </article>
  );
}
