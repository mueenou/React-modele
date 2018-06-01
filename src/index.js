import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// Notre premier composant React :)
// 1. Création d'un élément virtuel (virtual DOM)
// document.createElement('div')
// React.createElement('div')
const App = ({ text }) => (
  <div>
    <p className="message">{text}</p>
  </div>
);

App.propTypes = {
  text: PropTypes.string.isRequired,
};

// 2. Ajout de l'élément virtuel dans le DOM du navigateur (mount/render).
// cible.appendChild(quoiajouter)
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = <App text="Salut React !" />;
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});

