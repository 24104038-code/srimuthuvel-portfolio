import { useState } from 'react';
import { projects } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

export default function Projects() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            Academic and self-directed projects — click any card for the full breakdown.
          </p>
        </div>

        <div className="projects-grid" ref={ref}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActive}
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
              className={visible ? 'is-visible' : ''}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
