import { Link } from 'react-router-dom';

const Classes = () => {
  const classes = ['Classe 1', 'Classe 2', 'Classe 3']; // Ex: récupérer les classes depuis l'API backend

  return (
    <div>
      <h2>Liste des Classes</h2>
      <ul>
        {classes.map((classe, index) => (
          <li key={index}>
            {classe}
            <button>Editer</button>
            <button>Supprimer</button>
          </li>
        ))}
      </ul>
      <Link to="/ajout-classe">
        <button>Ajouter une Classe</button>
      </Link>
    </div>
  );
};

export default Classes;