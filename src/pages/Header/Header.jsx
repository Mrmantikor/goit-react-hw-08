import { NavLink, useNavigate } from 'react-router-dom';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
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
    navigate('/login');
  };

  return (
    <AppBar className={s.header}>
      <Toolbar className={s.header__nav}>
        <Box className={s.header__links}>
          <Button
            component={NavLink}
            to="/"
            className={s.header__link}
            classes={{ root: s.header__link, text: s.header__link }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/contacts"
            className={s.header__link}
            classes={{ root: s.header__link, text: s.header__link }}
          >
            Contacts
          </Button>
        </Box>

        <Box className={s.header__auth}>
          {!isAuthenticated ? (
            <Button
              onClick={handleLoginClick}
              className={s.header__button}
              classes={{ root: s.header__button, text: s.header__button }}
              startIcon={<FiLogIn className={s.header__icon} />}
              aria-label="Login"
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={handleLogout}
              className={s.header__button}
              classes={{ root: s.header__button, text: s.header__button }}
              startIcon={<FiLogOut className={s.header__icon} />}
              aria-label="Logout"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
