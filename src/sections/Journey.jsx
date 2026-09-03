import { journey } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import './Journey.css';

export default function Journey() {
  const [ref, visible] = useReveal();

  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">My Learning Journey</span>
          <h2 className="section-title">From first semester to shipped projects</h2>
          <p className="section-sub">
            No formal work experience yet — this is the timeline of what I've studied, built and earned along the way.
          </p>
        </div>

        <div className="journey-list" ref={ref}>
          {journey.map((entry, i) => (
            <div
              key={entry.title}
              className={`journey-item reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="journey-marker">
                <span className="journey-dot" />
                {i !== journey.length - 1 && <span className="journey-line" />}
              </div>
              <div className="journey-content">
                <span className="journey-year">{entry.year}</span>
                <h3 className="journey-title">{entry.title}</h3>
                <p className="journey-desc">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
