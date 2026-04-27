import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const roles = ['Frontend Engineer', 'Design Systems Builder', 'Full Stack Developer', 'ML Integrator'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentRole.length) {
      setDisplayed(currentRole.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(c => c + 1), 75);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(currentRole.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setRoleIndex(r => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,245,100,${p.a})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200,245,100,${0.04 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.bgWord} aria-hidden="true">SDE</div>

      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Available for new opportunities
        </div>

        <h1 className={styles.name}>
          Shivangi<br />
          <span className={styles.nameAccent}>Sharma</span>
        </h1>

        <div className={styles.roleRow}>
          <span className={styles.roleLabel}>I build</span>
          <span className={styles.roleType}>
            {displayed}
            <span className={styles.cursor} aria-hidden="true">|</span>
          </span>
        </div>

        <p className={styles.sub}>
          Software Engineer with 3+ years shipping production-grade web apps, design systems, and AI-powered workflows at companies like CrowdAnalytix and Siemens.
        </p>

        <div className={styles.cta}>
          <button className={styles.btnPrimary} onClick={() => scrollToSection('experience')}>
            View Experience
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollToSection('contact')}>
            Get in Touch
          </button>
          <a
            href="mailto:shivangi009shivi@gmail.com"
            className={styles.btnGhost}
          >
            shivangi009shivi@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>

      <div className={styles.cornerTag} aria-hidden="true">
        <span>Bangalore, India</span>
        <span className={styles.cornerDivider}>·</span>
        <span>B.Tech CS · JUET 2023</span>
      </div>
    </section>
  );
}
