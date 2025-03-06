import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    window.open(import.meta.env.VITE_API_URL + '/auth/logout', '_self');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">TaskManager</h1>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          {!user ? (
            <li>
              <Link to="/login" className="navbar-button login">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className="navbar-button logout">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
