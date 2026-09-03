import { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/icons';
import { profile } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import './GithubSection.css';

export default function GithubSection() {
  const [ref, visible] = useReveal();
  const [repos, setRepos] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ok | error

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${profile.githubHandle}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed');
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setRepos(Array.isArray(data) ? data : []);
        setStatus('ok');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section github-section">
      <div className="container">
        <div className="section-head github-head">
          <div>
            <span className="section-kicker">GitHub</span>
            <h2 className="section-title">Where the code lives</h2>
            <p className="section-sub">
              Live from my GitHub profile — repository list is fetched directly via the GitHub API.
            </p>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <GithubIcon size={16} /> View Full Profile
          </a>
        </div>

        {status === 'loading' && <p className="github-status">Fetching latest repositories…</p>}

        {status === 'error' && (
          <p className="github-status">
            Couldn't load live repository data right now — visit the{' '}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="github-inline-link">
              GitHub profile
            </a>{' '}
            directly.
          </p>
        )}

        {status === 'ok' && (
          <div className="github-grid" ref={ref}>
            {repos.length === 0 && <p className="github-status">No public repositories found.</p>}
            {repos.map((repo, i) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`github-card reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="github-card-top">
                  <h3>{repo.name}</h3>
                  <ExternalLink size={15} />
                </div>
                <p>{repo.description || 'No description provided.'}</p>
                <div className="github-card-meta">
                  {repo.language && <span className="github-lang">{repo.language}</span>}
                  <span><Star size={13} /> {repo.stargazers_count}</span>
                  <span><GitFork size={13} /> {repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
