import { Link } from 'react-router-dom';
import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.home}>
      <h1 className={s.home__title}>Effortlessly Manage Your Contacts</h1>
      <p className={s.home__description}>
        Add, organize, and access your contacts with ease. Our system allows you
        to group contacts, set reminders, and sync across devices.
      </p>
      <p className={s.home__description}>
        To start, register for a new account or log in to access your contact
        list.
      </p>
      <div className={s.home__buttons}>
        <Link
          to="/register"
          className={`${s.home__button} ${s['home__button--register']}`}
        >
          Register Now
        </Link>
        <Link
          to="/login"
          className={`${s.home__button} ${s['home__button--login']}`}
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Home;
