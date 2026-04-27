import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

const contactLinks = [
  { label: 'Email',    href: 'mailto:shivangi009shivi@gmail.com', display: 'shivangi009shivi@gmail.com', primary: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shivangi-sharma',   display: 'linkedin.com/in/shivangi-sharma' },
  { label: 'GitHub',   href: 'https://github.com/shivangi-sharma-09',     display: 'github.com/shivangi-sharma-09' },
  { label: 'LeetCode', href: 'https://leetcode.com',                      display: 'leetcode.com' },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('shivangi009shivi@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div ref={ref} className={`${styles.inner} ${inView ? styles.innerVisible : ''}`}>
        <div className={styles.label}>Contact</div>

        <h2 className={styles.heading}>
          Let's work<br />together.
        </h2>

        <p className={styles.sub}>
          Open to full-time roles, freelance collaborations, or just a good conversation about frontend engineering and design systems.
        </p>

        <div className={styles.links}>
          {contactLinks.map(({ label, href, display, primary }) => (
            <a
              key={label}
              href={href}
              className={`${styles.link} ${primary ? styles.linkPrimary : ''}`}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
            >
              <span className={styles.linkLabel}>{label}</span>
              <span className={styles.linkDisplay}>{display}</span>
              <span className={styles.linkArrow}>↗</span>
            </a>
          ))}
        </div>

        <button className={styles.copyBtn} onClick={copyEmail}>
          {copied ? '✓ Copied to clipboard' : '⧉ Copy email address'}
        </button>
      </div>

      <div className={styles.bgText} aria-hidden="true">HIRE ME</div>
    </section>
  );
}
