import './Navbar.css'
import logo from '../Assets/logo.jpg'

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>
  
        <ul className="nav-menu">
          <li>
            <a href="#acceuil">Acceuil</a>
          </li>
          <li>
            <a href="#apropos">A propos</a>
          </li>
          <li>
            <a href="#foncionnalités">Fonctionnalités</a>
          </li>
        </ul>
        
        <div className="nav-login-cart">
          <button>Login</button>
        </div>
      </div>
    );
  };
  
  export default Navbar;