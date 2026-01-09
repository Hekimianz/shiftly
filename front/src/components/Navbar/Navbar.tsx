import { Link } from 'react-router';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, loading } = useAuth();
  console.log(user);
  return (
    <div className={styles.navCont}>
      <Link className={styles.link} to="/">
        <h3 className={styles.logo}>Shiftly</h3>
      </Link>
      {!user && !loading && (
        <Link className={styles.link} to="login">
          <p className={styles.button}>Log in</p>
        </Link>
      )}
      {user && (
        <Link className={styles.link} to="profile">
          <span className={`material-symbols-outlined ${styles.accountIcon}`}>
            account_circle
          </span>
        </Link>
      )}
    </div>
  );
}
