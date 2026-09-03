import { profile } from '../data/profile';
import SocialLinks from './SocialLinks';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span className="footer-brand">Srimuthuvel<span className="nav-brand-dot">.</span></span>
          <p className="footer-tagline">{profile.headline}</p>
        </div>

        <SocialLinks />

        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  );
}
