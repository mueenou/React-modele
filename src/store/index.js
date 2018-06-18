/**
 * Dépendances npm : utilitaire Redux
 */
import { createStore } from 'redux';

/**
 * Dépendances locales : le reducer
 */
import reducer from './reducer';

/**
 * Création du store
 */
const store = createStore(reducer);

export default store;
