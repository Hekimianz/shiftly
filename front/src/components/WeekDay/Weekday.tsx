import styles from './Weekday.module.css';
export default function Weekday({ day, date }: { day: string; date: string }) {
  function formatMonthDay(dateStr: string) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  }

  console.log(date);
  return (
    <div className={styles.weekdayCont}>
      <button className={styles.dayOffBtn}>DAY OFF</button>
      <h3 className={styles.dayTitle}>
        {day}, {formatMonthDay(date)}
      </h3>
      <form>
        <div className={styles.inputCont}>
          <label htmlFor="start">SHIFT START</label>
          <input
            className={`${styles.timePicker} + ${styles.startTime}`}
            id="start"
          ></input>
        </div>
        <div className={styles.inputCont}>
          <label htmlFor="end">SHIFT START</label>
          <input
            className={`${styles.timePicker} + ${styles.startTime}`}
            id="end"
          ></input>
        </div>
      </form>
    </div>
  );
}
