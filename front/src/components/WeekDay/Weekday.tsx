import type { Dispatch, SetStateAction } from 'react';
import styles from './Weekday.module.css';
export default function Weekday({
  day,
  date,
  shift,
  i,
  setShifts,
}: {
  day: string;
  date: string;
  shift: { day: number; start: string; end: string; dayOff: boolean };
  i: number;
  setShifts: Dispatch<
    SetStateAction<
      { day: number; start: string; end: string; dayOff: boolean }[]
    >
  >;
}) {
  function formatMonthDay(dateStr: string) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  }

  function handleTimeChange(field: 'start' | 'end', value: string) {
    setShifts((prev) =>
      prev.map((shift) =>
        shift.day === i ? { ...shift, [field]: value } : shift
      )
    );
  }

  function handleDayOffToggle() {
    setShifts((prev) =>
      prev.map((shift) =>
        shift.day === i
          ? { ...shift, dayOff: !shift.dayOff, start: '', end: '' }
          : shift
      )
    );
  }

  return (
    <div className={`${styles.weekdayCont} ${shift.dayOff && styles.dayOff}`}>
      <button onClick={handleDayOffToggle} className={styles.dayOffBtn}>
        DAY OFF
      </button>
      <h3 className={styles.dayTitle}>
        {day}, {formatMonthDay(date)}
      </h3>
      <form>
        <div className={styles.inputCont}>
          <label htmlFor="start">SHIFT START</label>
          <input
            className={`${styles.timePicker} + ${styles.startTime}`}
            id="start"
            type="time"
            onChange={(e) => handleTimeChange('start', e.target.value)}
            value={shift.start}
          ></input>
        </div>
        <div className={styles.inputCont}>
          <label htmlFor="end">SHIFT START</label>
          <input
            className={`${styles.timePicker} + ${styles.startTime}`}
            id="end"
            type="time"
            onChange={(e) => handleTimeChange('end', e.target.value)}
            value={shift.end}
          ></input>
        </div>
      </form>
    </div>
  );
}
