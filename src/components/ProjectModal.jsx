import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Hammer, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  const isDeveloping = project?.status === 'developing';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close project details">
              <X size={20} />
            </button>

            <span className={`project-status ${isDeveloping ? 'status-developing' : 'status-live'}`}>
              {isDeveloping ? (
                <>
                  <Hammer size={12} /> Developing / Concept
                </>
              ) : (
                'Completed'
              )}
            </span>

            <h2 id="modal-title" className="modal-title">{project.name}</h2>
            <p className="modal-tech">{project.tech}</p>

            <section className="modal-section">
              <h3>Overview</h3>
              <p>{project.shortDescription}</p>
            </section>

            <section className="modal-section">
              <h3>Problem it solves</h3>
              <p>{project.problem}</p>
            </section>

            <section className="modal-section">
              <h3>{isDeveloping ? 'Planned Features' : 'Key Features'}</h3>
              <ul className="modal-feature-list">
                {(project.features || project.plannedFeatures).map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={15} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="modal-section">
              <h3>My contribution</h3>
              <p>{project.contribution}</p>
            </section>

            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="modal-actions">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <GithubIcon size={16} /> View Repository
                </a>
              ) : (
                <span className="modal-no-repo">Repository not published yet — concept in design.</span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
