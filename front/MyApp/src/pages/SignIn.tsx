import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Importez le fichier CSS
import signinImage from "../Components/Assets/end-user.png"; // Importez votre image

const SignIn = () => {
    const navigate = useNavigate();
  
    return (
      <div className="signin-container">
        {/* Grand conteneur divisé en deux */}
        <div className="signin-content">
          {/* Partie gauche : Image */}
          <div className="signin-image">
            <img src={signinImage} alt="Sign In" />
          </div>
  
          {/* Partie droite : Formulaire */}
          <div className="signin-box">
            <h2>Se connecter</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">identifiant</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="signin-button">Sign In</button>
            </form>
            <p className="signup-link">
              Vous n'avez pas de compte ? <button onClick={() => navigate('/signup')}>Sign Up</button>
            </p>
          </div>
        </div>
  
    
      </div>
    );
  };
  
  export default SignIn;