import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleClick = () => setOpen(false);

  return (
    <header className={`nav ${compact ? 'nav-compact' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="nav-brand" onClick={handleClick}>
          Srimuthuvel<span className="nav-brand-dot">.</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-outline nav-cta">Let's talk</a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleClick}>{link.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={handleClick}>Let's talk</a>
        </div>
      )}
    </header>
  );
}
