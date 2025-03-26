import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-item">
        <i className="icon-home"></i>
        <span>Home</span>
      </Link>
      <Link to="/search" className="nav-item">
        <i className="icon-search"></i>
        <span>Search</span>
      </Link>
      <Link to="/profile" className="nav-item">
        <i className="icon-profile"></i>
        <span>Profile</span>
      </Link>
      <Link to="/settings" className="nav-item">
        <i className="icon-settings"></i>
        <span>Settings</span>
      </Link>
    </nav>
  );
};

export default BottomNav;