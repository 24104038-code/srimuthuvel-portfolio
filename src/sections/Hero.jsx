import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import SocialLinks from '../components/SocialLinks';
import Terminal from '../components/Terminal';
import './Hero.css';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="hero-eyebrow">
            Computer Science Engineering Student
          </motion.span>

          <motion.h1 variants={item} className="hero-title">
            Hi, I'm {profile.name}
          </motion.h1>

          <motion.p variants={item} className="hero-role">
            {profile.headline}
          </motion.p>

          <motion.p variants={item} className="hero-desc">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href={profile.resumeFile} download className="btn btn-outline">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={item}>
            <SocialLinks className="hero-social" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Terminal />
        </motion.div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
