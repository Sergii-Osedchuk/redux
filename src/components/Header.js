import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const auth = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {auth && (
          <>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
