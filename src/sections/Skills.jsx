import { skills, softSkills, languages } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            Core languages and concepts I've applied across coursework and personal projects.
          </p>
        </div>

        <div className="skills-grid" ref={ref}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`skill-card reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h3 className="skill-card-title">{group.category}</h3>
              <ul className="skill-card-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-secondary">
          <div className="skills-secondary-block">
            <h3 className="skills-secondary-title">Soft skills</h3>
            <ul className="skills-pill-list">
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="skills-secondary-block">
            <h3 className="skills-secondary-title">Languages</h3>
            <ul className="skills-lang-list">
              {languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span>
                  <span className="skills-lang-level">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
