import styles from './Who.module.css';
export default function Who({
  color,
  text,
  icon,
}: {
  color: string;
  text: string;
  icon: string;
}) {
  return (
    <div className={styles.whoCont + ' ' + styles[color + 'Bg']}>
      <span className={`material-symbols-outlined ${styles[color]}`}>
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}
