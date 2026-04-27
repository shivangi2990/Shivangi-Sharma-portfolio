import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);

  const toggle = (i) => setActive(prev => (prev === i ? null : i));

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="section-label">Work Experience</div>

      <div className={styles.layout}>
        {/* LEFT: company list */}
        <nav className={styles.sidebar} aria-label="Experience navigation">
          {experiences.map((exp, i) => (
            <button
              key={i}
              className={`${styles.sideItem} ${active === i ? styles.sideItemActive : ''}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.sideDate}>{exp.date.split('—')[0].trim()}</span>
              <span className={styles.sideRole}>{exp.role}</span>
              <span className={styles.sideCompany}>{exp.company.split('·')[0].trim()}</span>
            </button>
          ))}
        </nav>

        {/* RIGHT: detail panel */}
        <div
          ref={ref}
          className={`${styles.panel} ${inView ? styles.panelVisible : ''}`}
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`${styles.detail} ${active === i ? styles.detailActive : ''}`}
              aria-hidden={active !== i}
            >
              <div className={styles.detailHeader}>
                <div>
                  <h2 className={styles.detailRole}>{exp.role}</h2>
                  <div className={styles.detailMeta}>
                    <span className={styles.detailCompany}>{exp.company}</span>
                    <span className={styles.detailSep}>·</span>
                    <span className={styles.detailLocation}>{exp.location}</span>
                  </div>
                </div>
                <div className={styles.detailDate}>{exp.date}</div>
              </div>

              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className={styles.bullet}
                    style={{ transitionDelay: `${j * 80}ms` }}
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>

              <div className={styles.detailTags}>
                <span className={styles.statusDot} />
                <span className={styles.statusText}>
                  {i === 0 ? 'Current Role' : 'Past Role'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile accordion */}
      <div className={styles.accordion}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`${styles.accItem} ${active === i ? styles.accItemOpen : ''}`}
          >
            <button className={styles.accHeader} onClick={() => toggle(i)}>
              <div>
                <span className={styles.accRole}>{exp.role}</span>
                <span className={styles.accCompany}>{exp.company}</span>
              </div>
              <div className={styles.accRight}>
                <span className={styles.accDate}>{exp.date.split('—')[0].trim()}</span>
                <span className={styles.accChevron}>{active === i ? '−' : '+'}</span>
              </div>
            </button>
            <div className={styles.accBody}>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className={styles.bullet} dangerouslySetInnerHTML={{ __html: bullet }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
