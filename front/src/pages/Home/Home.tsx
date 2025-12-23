import Feature from './Feature';
import styles from './Home.module.css';
import Who from './Who';
export default function Home() {
  return (
    <div className={styles.homeCont}>
      <section className={styles.heroCont}>
        <h1>
          Organize your work shifts.{' '}
          <span className={styles.highlight}>Share your week</span> in seconds.
        </h1>
        <p>
          Shiftly helps shift workers create weekly schedules and share them
          easily with friends, family or coworkers - no messy screenshots, no
          confusion.
        </p>
        <button className={styles.mainBtn}>Get started</button>
        <button className={styles.secBtn}>See example</button>
      </section>

      <section className={styles.whySection}>
        <h2>Why Shiftly?</h2>
        <p>Simplify your work life with tools designed for flexibility.</p>
        <Feature
          icon="calendar_view_week"
          title="Simple weekly schedules"
          color="purple"
        >
          Create your schedule week by week and add daily shifts in a clean,
          easy-to-read format.
        </Feature>
        <Feature icon="ios_share" title="Easy sharing" color="pink">
          Generate a link and share your week instantly. Anyone with the link
          can view it, no account needed.
        </Feature>
        <Feature icon="sync" title="Always up to date" color="green">
          Update your shifts anytime. Shared schedules always reflect the latest
          changes.
        </Feature>
      </section>

      <section className={styles.howSection}>
        <h2>How it works</h2>
        <div className={styles.howPoint}>
          <span className={`material-symbols-outlined ${styles.howPurple}`}>
            add_circle
          </span>
          <div>
            <h3>Create your week</h3>
            <p>
              Select a week and add your daily shifts with start and end times.
            </p>
          </div>
        </div>
        <div className={styles.howPoint}>
          <span className={`material-symbols-outlined ${styles.howPink}`}>
            send
          </span>
          <div>
            <h3>Create your week</h3>
            <p>Send a link to anyone who needs to know your schedule.</p>
          </div>
        </div>
      </section>

      <section className={styles.whoSection}>
        <h2>Who uses Shiftly?</h2>
        <Who color="blue" text="Shift workers" icon="schedule" />
        <Who color="yellow" text="Retail & hospitality" icon="storefront" />
        <Who color="red" text="Nurses & healthcare" icon="medical_services" />
        <Who color="green" text="Flexible teams" icon="group" />
      </section>

      <section className={styles.getStartedSection}>
        <h2>Ready to simplify your schedule?</h2>
        <p>Create your first week in minutes.</p>
        <button>Get started</button>
      </section>
    </div>
  );
}
