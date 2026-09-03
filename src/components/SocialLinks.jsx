import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { profile } from '../data/profile';
import './SocialLinks.css';

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="social-link"
      >
        <GithubIcon size={19} />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="social-link"
      >
        <LinkedinIcon size={19} />
      </a>
      <a
        href={`mailto:${profile.email}`}
        aria-label="Send an email"
        className="social-link"
      >
        <Mail size={19} />
      </a>
    </div>
  );
}
