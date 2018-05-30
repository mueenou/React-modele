Projet de base React
====================

## Utilisation

``` sh
git clone git@github.com:O-clock-Hyperspace/React-modele.git
cd React-modele
yarn # installer les dépendances du projet
yarn start # compiler le projet avec Parcel
# http://localhost:1234/
```

## Configuration

### Babel (ES6/JSX -> ES5)

``` sh
yarn add --dev babel-preset-env # vocabulaire ES6 -> ES5 de base
yarn add --dev babel-plugin-transform-class-properties
yarn add --dev babel-plugin-transform-object-rest-spread
yarn add --dev babel-preset-react
yarn add react react-dom
```

### ESLint

``` sh
yarn add --dev eslint eslint-config-airbnb babel-eslint
yarn add --dev eslint-import-resolver-alias
yarn add --dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

