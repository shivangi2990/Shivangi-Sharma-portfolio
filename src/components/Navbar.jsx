import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'Skills',      href: '#skills'      },
  { label: 'Experience',  href: '#experience'  },
  { label: 'What I Build', href: '#build'      },
  { label: 'About',       href: '#about'       },
  { label: 'Contact',     href: '#contact'     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['skills', 'experience', 'build', 'about', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className={styles.logo}>
        <span className={styles.logoAccent}>SS</span>
        <span className={styles.logoDivider}>/</span>
        <span className={styles.logoSub}>Portfolio</span>
      </a>

      <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`${styles.link} ${activeSection === href.replace('#', '') ? styles.linkActive : ''}`}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
        <a
          href="mailto:shivangi009shivi@gmail.com"
          className={styles.ctaBtn}
        >
          Hire Me
        </a>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
      </button>
    </nav>
  );
}
