import { useAuth } from '../../context/AuthContext';
import styles from './Profile.module.css';
export default function Profile() {
  const { user, loading } = useAuth();
  return (
    <section className={styles.profileCont}>
      {!loading ? (
        <>
          <span>{`Hi ${user?.firstName} ${user?.lastName}!`}</span>
          <span>Email: {user?.email}</span>
        </>
      ) : (
        <div className={styles.loader}></div>
      )}
    </section>
  );
}
