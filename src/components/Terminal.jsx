import { useEffect, useRef, useState } from 'react';
import './Terminal.css';

const LINES = [
  { prompt: '~', cmd: 'whoami' },
  { output: 'srimuthuvel-s' },
  { prompt: '~', cmd: 'cat role.txt' },
  { output: 'Aspiring Software Developer' },
  { prompt: '~', cmd: 'ls skills/' },
  { output: 'java  python  c-cpp  sql  algorithms  oop', dim: true },
  { prompt: '~', cmd: 'status --current' },
  { output: 'building. learning. shipping projects.', accent: true },
];

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Terminal() {
  const [renderedLines, setRenderedLines] = useState(() => (prefersReducedMotion() ? LINES : []));
  const [typing, setTyping] = useState('');
  const started = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    if (started.current) return;
    started.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    function step() {
      if (cancelled || lineIndex >= LINES.length) return;
      const line = LINES[lineIndex];

      if (line.output) {
        setRenderedLines((prev) => [...prev, line]);
        lineIndex += 1;
        charIndex = 0;
        setTyping('');
        setTimeout(step, 260);
        return;
      }

      if (charIndex <= line.cmd.length) {
        setTyping(line.cmd.slice(0, charIndex));
        charIndex += 1;
        setTimeout(step, 38);
      } else {
        setRenderedLines((prev) => [...prev, line]);
        lineIndex += 1;
        charIndex = 0;
        setTyping('');
        setTimeout(step, 200);
      }
    }

    const start = setTimeout(step, 700);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  const activeCmdLine = LINES[renderedLines.length];
  const isTypingCmd = activeCmdLine && !activeCmdLine.output;

  return (
    <div className="terminal" role="img" aria-label="Terminal showing a summary of Srimuthuvel's skills and current focus">
      <div className="terminal-bar">
        <span className="terminal-dot dot-red" />
        <span className="terminal-dot dot-yellow" />
        <span className="terminal-dot dot-green" />
        <span className="terminal-title">srimuthuvel@dev — zsh</span>
      </div>
      <div className="terminal-body">
        {renderedLines.map((line, i) =>
          line.output ? (
            <div
              key={i}
              className={`terminal-output ${line.dim ? 'dim' : ''} ${line.accent ? 'accent' : ''}`}
            >
              {line.output}
            </div>
          ) : (
            <div key={i} className="terminal-line">
              <span className="terminal-prompt">{line.prompt} ❯</span>
              <span className="terminal-cmd">{line.cmd}</span>
            </div>
          )
        )}
        {isTypingCmd && (
          <div className="terminal-line">
            <span className="terminal-prompt">{activeCmdLine.prompt} ❯</span>
            <span className="terminal-cmd">{typing}</span>
            <span className="terminal-caret" />
          </div>
        )}
      </div>
    </div>
  );
}
