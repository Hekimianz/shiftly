import styles from './Navbar.module.css';
export default function Navbar() {
  return (
    <div className={styles.navCont}>
      <h3 className={styles.logo}>Shiftly</h3>
      <p className={styles.button}>Log in</p>
    </div>
  );
}
