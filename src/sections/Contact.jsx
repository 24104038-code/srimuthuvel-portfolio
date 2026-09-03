import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from '../components/icons';
import { profile } from '../data/profile';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend/email service is wired up yet. This is where a request to
    // an email service (e.g. Formspree, EmailJS, or a custom API route)
    // would be sent using `form.name`, `form.email`, `form.message`.
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub">
            Open to internships, collaborations, and conversations about software development.
          </p>

          <div className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-info-item">
              <Mail size={17} />
              <span>{profile.email}</span>
            </a>
            <div className="contact-info-item">
              <MapPin size={17} />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="linkedin-cta">
            <h3>Let's Connect</h3>
            <p>Interested in technology, software development, and building meaningful solutions.</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <LinkedinIcon size={16} /> Connect on LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="What would you like to talk about?" />
          </div>

          <button type="submit" className="btn btn-primary contact-submit">
            <Send size={16} /> Send Message
          </button>

          {sent && (
            <p className="contact-sent">
              <CheckCircle2 size={16} /> Thanks — this form isn't wired to a backend yet, so please also reach me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
