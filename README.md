# La Todo List React

Le but de l'exercice est de créer une application "Todo List" en React.

## Mise en place

1. Télécharger le code source et ouvrir une invite de commande dans le dossier.
2. Installer les dépendances avec la commande `npm install`
3. Démarrer le serveur de développement avec la commande `npm start`
4. Ouvrir la page `http://localhost:3000/doc`, elle contient la documentation de l'API qui va permettre de stocker les tâches faites et à faire.
    - Un serveur de susbstitution rend cette API fonctionnelle **pour le développement uniquement**.
    - Cette page est interactive, vous pouvez essayer chaque route de l'API en cliquant sur le bouton, le résultat vous sera retourné au format JSON.
5. Ouvrir le fichier `server/db.json`, vous pouvez y observer des données provisoires qui vont servir au test de notre application.
    - Les données vont être modifiées lors des tests que vous allez effectuer.
    - Vous pouvez vous même ajouter/supprimer ou modifier des données dans ce fichier durant le développement.

## Exercices

### Partie 1: Découverte de l'API

Afin de vous familiariser avec l'API mise en place, mais également avec la méthode `fetch()` du navigateur, vous allez coder des fonctions permettant de lire et modifier les données.

1. Ouvrir le fichier `src/api.js`, il contient des fonctions à remplir. Chaque fonction a un _bloc de documentation_ qui décrit succintement ce qu'elle est sensée accomplir, les paramètres qu'elle reçoit et la valeur qu'elle doit retourner.
2. Du code permettant de vérifier l'exécution de ces fonctions a été écrit. Pour vérifier le résultat de vos fonctions, décommentez le.
3. Ouvrir la page `https://localhost:3000/` dans votre navigateur, et ouvrir la console pour voir les messages s'afficher (`ctrl + maj + k` sous Firefox, sinon _Menu > Outils supplémentaires > Outils de développement > Console_).
4. Lancer la commande `npm test` dans un terminal.
5. Ouvrir le fichier `index.html` du dossier `coverage` dans un navigateur web. Des tests vont appraître à l'écran, essayez de résoudre chacun d'entre eux dans l'ordre où ils s'affichent.

### Partie 2: React

Il s'agit de "connecter" l'API avec une interface d'application en React.

1. Si vous avez une application de todo list déjà créée en React, vous pouvez copier/coller son code dans le dossier `src` (attention à ne pas supprimer votre fichier `api.js`, ni le dossier `test`).
2. Vous pouvez réutiliser le code créer dans `api.js` avec quelques modifications: au lieu de modifier le tableau `todos`, il faudra se servir des Hooks que vous aurez mis en place.

## Ressources

- _Récupérer des données du serveur, API web côté client, JavaScript, Apprendre le développement web_, Mozilla Developers Network, [https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- _Gérer les opérations asynchrones avec élégance grâce aux promesses, JavaScript asynchrone, JavaScript, Apprendre le développement web_, Mozilla Developers, [https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- _Démarrer avec React, Comprendre les frameworks Javascript côté client, Outils et tests, Apprendre le développement web_, Mozilla Developers Network, [https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started](https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) (EN-US)
- _Apperçu des Hooks, Docs_, reactjs.org, [https://fr.reactjs.org/docs/hooks-overview.html](https://fr.reactjs.org/docs/hooks-overview.html)