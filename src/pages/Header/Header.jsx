import { NavLink, useNavigate } from 'react-router-dom';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import s from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
  };

  const handleLoginClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  };

  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        <div className={s.header__links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${s.header__link} ${s['header__link--active']}`
                : s.header__link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? `${s.header__link} ${s['header__link--active']}`
                : s.header__link
            }
          >
            Contacts
          </NavLink>
        </div>

        <div className={s.header__auth}>
          {!isAuthenticated ? (
            <button onClick={handleLoginClick} className={s.header__button}>
              <FiLogIn className={s.header__icon} />
              Login
            </button>
          ) : (
            <button onClick={handleLogout} className={s.header__button}>
              <FiLogOut className={s.header__icon} />
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
