import styles from './Feature.module.css';

type FeatureProps = {
  icon: string;
  color: string;
  title: string;
  children: React.ReactNode;
};

export default function Feature({
  icon,
  color,
  title,
  children,
}: FeatureProps) {
  return (
    <div className={styles.featureCont}>
      <span className={`material-symbols-outlined ${styles[color]}`}>
        {icon}
      </span>
      <h3>{title}</h3>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
