// Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header            /* full-width bar */
      className="
        w-100 py-3 px-4                  /* top/bottom & side padding   */
        d-flex justify-content-between   /* space-between the 3 blocks  */
        align-items-center               /* vertical centring           */
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
            list-unstyled m-0 fw-bold
          "
        >
          <li>
            <Link
              to="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className="text-white text-decoration-none"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-current={pathname === '/about' ? 'page' : undefined}
              className="text-white text-decoration-none"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              aria-current={pathname === '/project' ? 'page' : undefined}
              className="text-white text-decoration-none"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              aria-current={pathname === '/contact' ? 'page' : undefined}
              className="text-white text-decoration-none"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      {/* THEME ICON (right) */}
      <FontAwesomeIcon icon={['fas', 'sun']} className="text-white fs-4" />
    </header>
  );
};

export default Header;
