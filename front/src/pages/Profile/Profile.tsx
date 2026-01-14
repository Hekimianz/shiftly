import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import styles from './Profile.module.css';
export default function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <section className={styles.profileCont}>
      {!loading ? (
        <>
          <span>{`Hi ${user?.firstName} ${user?.lastName}!`}</span>
          <span>Email: {user?.email}</span>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
          >
            logout
          </button>
        </>
      ) : (
        <div className={styles.loader}></div>
      )}
    </section>
  );
}
