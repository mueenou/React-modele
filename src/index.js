import React from 'react';
import { render } from 'react-dom';

// Notre premier composant React :)
// 1. Création d'un élément virtuel (virtual DOM)
// document.createElement('div')
// React.createElement('div')
const App = () => (
  <div>
    <p className="message">salut !</p>
  </div>
);

// 2. Ajout de l'élément virtuel dans le DOM du navigateur (mount/render).
// cible.appendChild(quoiajouter)
const rootComponent = App();
const targetNode = document.getElementById('root');
render(rootComponent, targetNode);
