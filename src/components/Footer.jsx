import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>Shivangi Sharma · Software Engineer</span>
      <span className={styles.center}>Built with React</span>
      <span className={styles.right}>Bangalore, India · {year}</span>
    </footer>
  );
}
