import styles from './Login.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router';
const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  return (
    <section className={styles.loginCont}>
      <span className={`material-symbols-outlined ${styles.mainIcon}`}>
        calendar_month
      </span>
      <h1>Welcome back!</h1>
      <p>Let's get you scheduled</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <ErrorMessage
              className={styles.error}
              name="email"
              component="div"
            />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="div"
            />
            <label htmlFor="email">Email Address</label>
            <Field
              placeholder="name@company.com"
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <Field
              placeholder="password"
              type="password"
              name="password"
              id="password"
            />
            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
      <p className={styles.register}>
        Don't have an account?{' '}
        <Link className={styles.registerLink} to="/">
          Create one here!
        </Link>
      </p>
    </section>
  );
}
