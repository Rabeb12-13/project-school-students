
import './Acceuil.css';
import { useNavigate } from 'react-router-dom';
import accueilImage from "../Components/Assets/acceuil.jpg";
import aproposImage from "../Components/Assets/Sans-titre38.jpg";
import gestionEtudiantsImage from "../Components/Assets/gestion-etudiants.png";
import gestionClassesImage from "../Components/Assets/gestion-classes.png";
import gererAffectationImage from "../Components/Assets/gerer-affectation.png";;
const Acceuil = () => {
    const navigate = useNavigate();
  return (
    <div>
      {/* Section Accueil */}
      <section id="acceuil">
        <h1>Bienvenue sur l'application</h1>
        <img src={accueilImage} alt="acceuil" />
      </section>

      {/* Section À propos */}
      <section id="apropos">
        <h2>A propos de l'application</h2>
        <div className="about-content">
          <div className="about-text-box">
            <p>
            L'application permet de gérer l'inscription des élèves dans une école de manière efficace 
            et organisée. Elle offre des fonctionnalités complètes pour gérer les élèves, les classes, 
            et affecter chaque élève à une classe spécifique. Grâce à cet outil, les administrateurs 
            peuvent suivre facilement les informations des élèves, mettre à jour leurs données, 
            et s'assurer que chaque élève est correctement inscrit dans la classe appropriée. 
            Simplifiez la gestion scolaire avec une solution intuitive et performante !
            </p>
          </div>
          <div className="about-image">
            <img src={aproposImage} alt="A propos" /> {/* Remplacez par votre image */}
          </div>
        </div>
      </section>

      <section id="fonctionnalites">
         <h2>Fonctionnalités</h2>
        <div className="fonctionnalites-container">
    {/* Box 1 : Gestion des étudiants */}
    <div className="fonctionnalite-box">
      <img src={gestionEtudiantsImage} alt="Gestion des étudiants" /> {/* Remplacez par votre image */}
      <button className="fonctionnalite-btn"onClick={() => navigate('/signin')}>Gestion des étudiants</button>
    </div>

    {/* Box 2 : Gestion des classes */}
    <div className="fonctionnalite-box">
    <img src={gestionClassesImage} alt="Gestion des classes" />
      <button className="fonctionnalite-btn"onClick={() => navigate('/signin')}>Gestion des classes</button>
    </div>

    {/* Box 3 : Gérer l'affectation */}
    <div className="fonctionnalite-box">
      <img src={gererAffectationImage} alt="Gérer l'affectation" /> {/* Remplacez par votre image */}
      <button className="fonctionnalite-btn"onClick={() => navigate('/signin')}>Gérer l'affectation</button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Acceuil;