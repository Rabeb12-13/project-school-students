import { Link } from 'react-router-dom';

const Eleves = () => {
  const eleves = ['Élève 1', 'Élève 2', 'Élève 3']; // Ex: récupérer les élèves depuis l'API backend

  return (
    <div>
      <h2>Liste des Élèves</h2>
      <ul>
        {eleves.map((eleve, index) => (
          <li key={index}>
            {eleve}
            <button>Editer</button>
            <button>Supprimer</button>
          </li>
        ))}
      </ul>
      <Link to="/ajout-eleve">
        <button>Ajouter un Élève</button>
      </Link>
    </div>
  );
};

export default Eleves;