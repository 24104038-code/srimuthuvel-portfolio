import { Award, BadgeCheck } from 'lucide-react';
import { certifications, achievements } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import './Achievements.css';

export default function Achievements() {
  const [ref, visible] = useReveal();

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="achievements-cols" ref={ref}>
          <div>
            <div className="section-head">
              <span className="section-kicker">Certifications</span>
              <h2 className="section-title">Certifications</h2>
            </div>
            <ul className="cert-list">
              {certifications.map((cert, i) => (
                <li
                  key={cert.name}
                  className={`cert-item reveal ${visible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <BadgeCheck size={18} />
                  <span>{cert.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-head">
              <span className="section-kicker">Achievements</span>
              <h2 className="section-title">Achievements</h2>
            </div>
            <ul className="achievement-list">
              {achievements.map((a, i) => (
                <li
                  key={a.title}
                  className={`achievement-item reveal ${visible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <Award size={18} className="achievement-icon" />
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
