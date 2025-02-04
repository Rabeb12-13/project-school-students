import { useNavigate } from 'react-router-dom'; 
import './SignUp.css'; 
const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className="signin-container">
      <h2>Inscription</h2>
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">S'inscrire</button>
      </form>
      <p>
        Vous avez déjà un compte ?{' '}
        <button onClick={() => navigate('/signin')}>Connectez-vous</button>
      </p>
    </div>
  );
};

export default SignUp;