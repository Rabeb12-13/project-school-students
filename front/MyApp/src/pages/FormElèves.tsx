import { useState } from 'react';

const FormEleve = () => {
  const [nomEleve, setNomEleve] = useState('');
  const [classeEleve, setClasseEleve] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyer les informations au backend pour ajouter/modifier un élève
    console.log("Élève ajouté : ", nomEleve, classeEleve);
  };

  return (
    <div>
      <h2>Ajouter ou Modifier un Élève</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom de l'Élève:
          <input
            type="text"
            value={nomEleve}
            onChange={(e) => setNomEleve(e.target.value)}
            required
          />
        </label>
        <label>
          Classe:
          <select value={classeEleve} onChange={(e) => setClasseEleve(e.target.value)}>
            <option value="Classe 1">Classe 1</option>
            <option value="Classe 2">Classe 2</option>
            <option value="Classe 3">Classe 3</option>
            {/* Ex : options récupérées depuis une API backend */}
          </select>
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default FormEleve;