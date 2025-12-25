import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './Register.module.css';
import * as Yup from 'yup';
import { Link } from 'react-router';

const RegSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('You must confirm the password'),
});

export default function Register() {
  return (
    <section className={styles.loginCont}>
      <span className={`material-symbols-outlined ${styles.mainIcon}`}>
        waving_hand
      </span>
      <h1>Welcome aboard!</h1>
      <p>Let's get you scheduled</p>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPass: '',
        }}
        validationSchema={RegSchema}
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
              name="firstName"
              component="div"
            />
            <ErrorMessage
              className={styles.error}
              name="lastName"
              component="div"
            />
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
            <ErrorMessage
              className={styles.error}
              name="confirmPass"
              component="div"
            />
            <label htmlFor="firstName">First Name</label>
            <Field
              placeholder="first name"
              type="text"
              name="firstName"
              id="firstName"
            />
            <label htmlFor="firstName">Last Name</label>
            <Field
              placeholder="last name"
              type="text"
              name="lastName"
              id="lastName"
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
            <label htmlFor="confirmPass">Confirm Password</label>
            <Field
              placeholder="confirm password"
              type="password"
              name="confirmPass"
              id="confirmPass"
            />
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p className={styles.register}>
        Already have an account?{' '}
        <Link className={styles.registerLink} to="/login">
          Sign in here!
        </Link>
      </p>
    </section>
  );
}
