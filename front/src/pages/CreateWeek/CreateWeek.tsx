import { useMemo, useState } from 'react';
import Weekday from '../../components/WeekDay/Weekday';
import styles from './CreateWeek.module.css';
function getWeekMonday(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');

  const day = date.getDay();
  const diff = (day + 6) % 7;
  date.setDate(date.getDate() - diff);
  return date.toISOString().slice(0, 10);
}

function getWeekDays(weekStart: string) {
  const start = new Date(weekStart + 'T00:00:00');

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    return {
      date: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString('en-US', { weekday: 'long' }),
    };
  });
}
export default function CreateWeek() {
  const [selectedDate, setSelectedDate] = useState('');
  const [weekStart, setWeekStart] = useState('');
  const weekDays = useMemo(
    () => (weekStart ? getWeekDays(weekStart) : []),
    [weekStart]
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedDate(value);

    if (!value) {
      setWeekStart('');
      return;
    }

    const monday = getWeekMonday(value);
    setWeekStart(monday);
  };

  const showWeekForm = Boolean(weekStart) && Boolean(weekStart[0] !== '0');

  return (
    <section className={styles.createWeekCont}>
      <h2>Create your week</h2>
      <p className={styles.subtitle}>
        Include your shift hours for each day and generate your week
      </p>
      <hr />
      <label htmlFor="date">
        {showWeekForm
          ? 'Next, enter your shift times for each day, and select your days off'
          : 'First, select a day of the week you wish to create'}
      </label>
      <input
        type="date"
        id="date"
        className={styles.datePicker}
        value={selectedDate}
        onChange={handleDateChange}
      />
      {showWeekForm && (
        <>
          <p className={styles.weekSummary}>
            Week of{' '}
            {new Date(weekDays[0].date + 'T00:00:00').toLocaleDateString(
              'en-US',
              { weekday: 'short', month: 'short', day: 'numeric' }
            )}{' '}
            –{' '}
            {new Date(weekDays[6].date + 'T00:00:00').toLocaleDateString(
              'en-US',
              { weekday: 'short', month: 'short', day: 'numeric' }
            )}
          </p>

          <div className={styles.weekdaysCont}>
            {weekDays.map((day) => (
              <Weekday key={day.date} day={day.label} date={day.date} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
