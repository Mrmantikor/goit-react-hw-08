import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './Registration.module.scss';

const Registration = () => {
  return (
    <div className={s.registration}>
      <div className={s.registration__back}>
        <Link
          to="/"
          className={`${s.registration__button} ${s['registration__button--back']}`}
        >
          ← Go Back
        </Link>
      </div>
      <div className={s.registration__form}>
        <h1 className={s.registration__title}>Register Your Account</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
