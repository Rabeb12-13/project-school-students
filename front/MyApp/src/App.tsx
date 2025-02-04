import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil'; // Import de la page Accueil
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './pages/Acceuil.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Définition de la route pour la page d'Accueil */}
          <Route path="/" element={<Acceuil />} />
          <Route path="/signin" element={<SignIn />} /> {/* Page de connexion */}
          <Route path="/signup" element={<SignUp />} /> {/* Page d'inscription */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
