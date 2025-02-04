import { useState } from 'react';

const FormClasse = () => {
  const [nomClasse, setNomClasse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyer le nom de la classe au backend pour ajout/modification
    console.log("Classe ajoutée/modifiée : ", nomClasse);
  };

  return (
    <div>
      <h2>Ajouter ou Modifier une Classe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom de la Classe:
          <input
            type="text"
            value={nomClasse}
            onChange={(e) => setNomClasse(e.target.value)}
            required
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default FormClasse;