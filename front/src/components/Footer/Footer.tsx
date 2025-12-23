import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.logo}>Shiftly</h3>
      <div className={styles.links}>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Contact</span>
      </div>
      <span>Made with ♥️ by Aram Hekimian</span>
    </footer>
  );
}
