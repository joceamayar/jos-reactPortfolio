//import Contact from './pages/Contact';
import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
  
    <ul className="nav nav-tabs">
      <li className="nav-item" id="navtab">
        <Link
          to="/"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About me 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
          
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact me

        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume

        </Link>
      </li>
    </ul>

    
  );
}

export default NavTabs;


