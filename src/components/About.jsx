import { useInView } from '../hooks/useInView';
import { stats } from '../data/portfolio';
import styles from './About.module.css';

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="section-label">About</div>

      <div ref={ref} className={`${styles.inner} ${inView ? styles.innerVisible : ''}`}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Full stack<br />
            of <span className={styles.headingAccent}>skills.</span>
          </h2>

          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <div key={i} className={styles.stat} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={styles.statNum}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.education}>
            <div className={styles.eduLabel}>Education</div>
            <div className={styles.eduTitle}>B.Tech, Computer Science</div>
            <div className={styles.eduSub}>Jaypee University of Engineering & Technology · Guna, MP</div>
            <div className={styles.eduDate}>July 2019 – May 2023</div>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.body}>
            I'm a Software Engineer based in Bangalore with 3+ years of experience building production-grade frontend systems, AI-driven workflows, and ML-powered APIs.
          </p>
          <p className={styles.body}>
            I've worked across the stack — designing scalable design systems and secure auth integrations at CrowdAnalytix, to building NLP pipelines and semantic knowledge graphs at Siemens.
          </p>
          <p className={styles.body}>
            I care deeply about performance, code quality, and building interfaces that make complex systems feel effortless and fast for real users.
          </p>

          <div className={styles.techRow}>
            {['Angular', 'React', 'TypeScript', 'GCP', 'Python', 'D3.js'].map(t => (
              <span key={t} className={styles.techPill}>{t}</span>
            ))}
          </div>

          <div className={styles.availability}>
            <span className={styles.availDot} />
            <span className={styles.availText}>Open to full-time opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
