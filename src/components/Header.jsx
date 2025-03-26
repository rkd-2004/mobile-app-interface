import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Header = ({ title }) => {
  const navigate = useNavigate();
  
  return (
    <header className="app-header">
      <Button variant="icon" onClick={() => navigate(-1)}>
        <i className="material-icons">arrow_back</i>
      </Button>
      <h1 className="header-title">{title}</h1>
      <div className="header-spacer"></div>
    </header>
  );
};

export default Header;