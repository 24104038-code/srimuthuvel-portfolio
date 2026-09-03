import { profile, currentlyExploring } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import photo from '../assets/profile-photo.png';
import './About.css';

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container about-grid" ref={ref}>
        <div className={`about-photo-wrap reveal ${visible ? 'is-visible' : ''}`}>
          <div className="about-photo-frame">
            <img src={photo} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>

        <div className={`about-copy reveal ${visible ? 'is-visible' : ''}`}>
          <span className="section-kicker">About</span>
          <h2 className="section-title">Building software that solves real problems</h2>

          <p className="about-text">{profile.summary}</p>

          <div className="about-exploring">
            <h3 className="about-exploring-title">Currently learning &amp; exploring</h3>
            <ul className="about-exploring-list">
              {currentlyExploring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-facts">
            <div className="about-fact">
              <span className="about-fact-label">Based in</span>
              <span className="about-fact-value">{profile.location}</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-label">Focus</span>
              <span className="about-fact-value">Full Stack Development</span>
            </div>
            <div className="about-fact">
              <span className="about-fact-label">Currently</span>
              <span className="about-fact-value">B.E. CSE, 2024 – 2028</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
