import { Link } from 'react-router';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, loading } = useAuth();

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
        <div className={styles.link}>
          <Link className={styles.link} to="profile">
            <span className={`material-symbols-outlined ${styles.accountIcon}`}>
              account_circle
            </span>
            <span>{`${user.firstName} ${user.lastName[0]}.`}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
