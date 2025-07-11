// Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { ThemeContext } from './ThemeContext';


const Header = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <header            /* full-width bar */
      className="
        w-100 py-3 px-4                  /* top/bottom & side padding   */
        d-flex justify-content-between   /* space-between the 3 blocks  */
        align-items-center               /* vertical centring           */
        fs-5
      "
    >
      {/* LOGO (left) */}
      <Link to="/" className="d-inline-block">
            <img src="logo.png" alt="profile" height={40} width={40} />
      </Link>

      {/* NAVIGATION (centre) */}
      <nav className="flex-grow-1">        {/* allow nav to stretch   */}
        <ul
          className="
            d-flex flex-wrap justify-content-center  /* centre within flex-grow */
            align-items-center gap-3 gap-md-5       /* equal horizontal gaps   */
            list-unstyled m-0 

          "
        >
          <li>
            <Link
              to="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-decoration-none`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-current={pathname === '/about' ? 'page' : undefined}
              className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-decoration-none`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gear"
              aria-current={pathname === '/gear' ? 'page' : undefined}
              className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-decoration-none`}
            >
              Gear
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              aria-current={pathname === '/contact' ? 'page' : undefined}
              className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-decoration-none`}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      {/* THEME ICON (right) */}
      { theme === 'dark' ? (
        <FontAwesomeIcon
          icon="sun"
          className="text-white fs-4"
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <FontAwesomeIcon
          icon="moon"
          className={`${theme === 'dark' ? 'text-white' : 'text-dark'} fs-4`}
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
        />
      )}
      
    </header>
  );
};

export default Header;
