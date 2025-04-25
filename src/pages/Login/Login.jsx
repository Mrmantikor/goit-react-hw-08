import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './Login.module.scss';

const Login = () => {
  return (
    <div className={s.login}>
      <div className={s.login__back}>
        <Link
          to="/"
          className={`${s.login__button} ${s['login__button--back']}`}
        >
          ← Go Back
        </Link>
      </div>
      <div className={s.login__form}>
        <h1 className={s.login__title}>Log In to Your Account</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
