import { Link } from 'react-router';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={styles.navCont}>
      <Link className={styles.link} to="/">
        <h3 className={styles.logo}>Shiftly</h3>
      </Link>
      <Link className={styles.link} to="login">
        {!user && <p className={styles.button}>Log in</p>}
      </Link>
    </div>
  );
}
