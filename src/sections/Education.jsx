import { GraduationCap } from 'lucide-react';
import { education } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import './Education.css';

export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Education</span>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="education-grid" ref={ref}>
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`education-card reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <GraduationCap size={20} className="education-icon" />
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <div className="education-meta">
                {edu.duration && <span>{edu.duration}</span>}
                <span className="education-detail">{edu.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
