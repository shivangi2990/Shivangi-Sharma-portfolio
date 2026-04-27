import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="section-label">Technical Skills</div>

      <div
        ref={ref}
        className={`${styles.grid} ${inView ? styles.gridVisible : ''}`}
      >
        {skills.map((cat, i) => (
          <div
            key={cat.category}
            className={`${styles.card} ${hovered === i ? styles.cardActive : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardIndex}>0{i + 1}</div>
              <h3 className={styles.catTitle}>{cat.category}</h3>
              <div className={styles.tags}>
                {cat.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={styles.cardBorder} />
          </div>
        ))}
      </div>

      {/* Marquee strip */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...skills.flatMap(s => s.tags), ...skills.flatMap(s => s.tags)].map((tag, i) => (
            <span key={i} className={styles.marqueeItem}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
