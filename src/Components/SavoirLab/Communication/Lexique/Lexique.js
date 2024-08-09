import React from 'react';
import './Lexique.css';
import lexiquedoc1 from "../../../../Assets/lexiquedoc1.png";

const Lexique = () => {
  return (
    <>
    <div className="background-image-Communication"></div>
    <div className="lexique-container">
        
        <div className="overlay-text-Communication">
          <h1 className="Communication-titre">Le lexique de communication inclusive des personnes handicapées  </h1>
          </div>
      <div className="lexique-column">
        <div className="lexique-preview">
          <img 
            src={lexiquedoc1}
            alt="lexique Preview" 
            className="lexique-image" 
          />
          <a 
            href="path-to-lexique" 
            className="download-button" 
            download
          >
            Télécharger
          </a>
        </div>
        <a 
          href="path-to-french-version" 
          className="french-link"
        >
          Accéder au lexique en français
        </a>
      </div>
      <div className="lexique-content">
        <h2>Lignes directrices pour l’inclusion du handicap dans les communications.</h2>
        <div className="context-section">
          <h4>Contexte :</h4>
          <p>
          Les mots ont du pouvoir : ils peuvent à la fois libérer et opprimer. Bien choisir ses mots est important, notamment pour la représentation des personnes handicapées. Nous offrons ici des directives pour un langage qui respecte et valorise chaque individu sans renforcer les stéréotypes ou les préjugés. 
          </p>
          <p>
          En choisissant soigneusement les mots et les terminologies, les médias ont le pouvoir de transformer la perception publique du handicap. Un langage inclusif et respectueux renforce l’intégration sociale des personnes handicapées et promeut une culture médiatique qui est véritablement représentative de la diversité de la société.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Lexique;
