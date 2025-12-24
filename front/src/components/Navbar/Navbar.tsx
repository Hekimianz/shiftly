import { Link } from 'react-router';
import styles from './Navbar.module.css';
export default function Navbar() {
  return (
    <div className={styles.navCont}>
      <Link className={styles.link} to="/">
        <h3 className={styles.logo}>Shiftly</h3>
      </Link>
      <Link className={styles.link} to="login">
        <p className={styles.button}>Log in</p>
      </Link>
    </div>
  );
}
