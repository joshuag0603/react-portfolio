import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              HOME
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/AboutMe'
              className={
                currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'
              }
            >
              ABOUT ME
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/Projects'
              className={
                currentPage === '/Projects' ? 'nav-link active' : 'nav-link'
              }
            >
              PROJECTS
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/Resume'
              className={
                currentPage === '/Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              RESUME
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/Contact'
              className={
                currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
              }
            >
              CONTACT
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
