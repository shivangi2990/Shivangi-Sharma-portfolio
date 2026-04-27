import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { whatIBuild } from '../data/portfolio';
import styles from './WhatIBuild.module.css';

export default function WhatIBuild() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="build" className={`section ${styles.build}`}>
      <div className="section-label">What I Build</div>

      <div
        ref={ref}
        className={`${styles.grid} ${inView ? styles.gridVisible : ''}`}
      >
        {whatIBuild.map((item, i) => (
          <div
            key={i}
            className={`${styles.card} ${hovered === i ? styles.cardHovered : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className={styles.cardTop}>
              <span className={styles.num}>{item.number}</span>
              <div className={styles.arrow}>↗</div>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
