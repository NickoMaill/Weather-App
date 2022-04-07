<div align="center">
    <img src="images/AppLogo.png" alt="Logo" width="80" height="80">
    <h1 align="center">WeatherApp</h1>
    <p align="center">Une application simple pour vous donner la météo n'importe quand, n'importe où pour n'importe quelle ville</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">A propos du projet</a>
      <ul>
        <li><a href="#built-with">Fabriqué avec</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Démarrage</a>
      <ul>
        <li><a href="#prerequisites">Pré-requis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usages</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->

## À propos du projet

Weather App est avant tout un projet réalisé dans le cadre de la formation développeur Web Fullstack dispensé par l'école Konexio. Au départ c'est appli fu codé en React, mais depuis j'ai pris la décision de la convertir en appli mobile. 
Dans cette appli vous pourrez consulter la météo de n'importe quelle ville, sauvegarder jusqu'à 3 météos en favoris et initialiser vous-même votre ville par défaut (au départ celle-ci renseigne dans votre adresse via formulaire d'inscription). 

### Fabriqué avec

Vous trouverez ici tous les technologies utilisées pour ce projet (cet est section sûrement voué à évoluer)

_Backend_

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [PGAdmin4](https://www.pgadmin.org/)

_Frontend_

-   [React native](https://reactnative.dev/)
-   [Expo](https://expo.dev/)

### Prérequis
_Sans ces prérequis il sera difficile de tester notre application météo Pour tester notre application en mode "développeur", vous aurez besoin :

1. d'un éditeur de texte de type : vscode, sublimeText, Froala etc .

2. Node js installé (si ce n'est pas fait, vous pouvez aller sur le site https://nodejs.org/en/download/ pour télécharger le package et ensuite installez-le)

3. Avoir installé les packages manager npm et yarn (npm est normalement installé automatiquement à l'installation de NodeJS pour le vérifier taper dans votre terminal `npm-). Pour installer yarn taper la commande `npm install -g yarn`, si vous êtes sur mac ou Linux et que la commande vous renvoi une erreur essayer avec celle-ci `sudo npm install -g yarn`.

### Installation

_Suivez bien les étapes de l'installation elle peut être fastidieuse_

1. Inscrivez vous et procurez vous une clé API sur [OpenWeather](https://example.com) --> Current Weather Data --> Subscribe

2. Clonez le repo
    ```sh
    git clone https://github.com/NickoMaill/Weather-App.git
    ```
3. Créez vous une base de donnée de type PostgreSQL a l'aide d'un hebergeur comme [Heroku](https://id.heroku.com/)

4. Copier coller ensuite les ligne de commandes figurants dans le fichier Back/data/command.sql dans votre logiciel de gestion de base de donnée.

5. Installez les packages dans le dossier Back 
    ```sh
    npm install
    ```
6. Istallez les packages dans le dossier Front
    ```sh
    npm install
    ```

7. Dans le dossier Back, créez à la racine de ce dernier, un fichier `config.env` dans lequel nous allons stocker toutes nos variables d'environnements
    ```env
    PGHOST="l'adresse serveur de votre base de données"
    PGDATABASE="le nom de votre base de données"
    PGUSER="le nom d''utilisateur"
    PGPORT="le port utilisé (pour PostgreSQL le port sera toujours à 5432)"
    PGPASSWORD="le mot de passe de votre base de données"
    SECRET="ici généré une "key" a l'aide d'un générateur comme Encryption Key Generator*"
    SERVICE_MAIL="le service d'email souhaitez"
    USER_MAIL="votre email"
    PASSWORD_MAIL="le mot de passe de votre email"
    ```
> :warning: **CES INFORMATIONS SONT SENSIBLES**, ne vous inquiétez pas, si vous avez bien suivis les instructions, dans ce fichier elles ne risquent rien 

8. Ouvrez ensuite un terminal à la racine du dossier front et exécuter la commande `expo start` puis `yarn ios` pour lancer sur IOS, ou `yarn android` pour lancer sur android, ou enfin `yarn web` pour lancer sur votre navigateur (solution la plus compatible).

:white_check_mark: **FELICITATION** vous avez maintenant installé tous les outils dont vous avez besoin pour tester cette application en mode "développeur"

## Roadmap

-   [x] crée un système d'authentification
    -   [x] envoi de mail de confirmation
    -   [x] réinitialisation de mot de passe
-   [ ] Crée une interface en React Native 
    -   [ ] possibilité d'ajouter jusqu'à 3 favoris par compte
    -   [ ] utiliser un de ces favoris en météo par défaut
    -   [ ] effectuer des recherches personnalisées
        -   [ ] par villes
        -   [ ] par températures les plus froides
        -   [ ] par températures les plus chaudes
    -   [ ] intégrer un système de dark ou light mode
-   [ ] Multi-language support
    -   [ ] Français
    -   [ ] Anglais

## Contact
Nicolas Maillols - [@NickoMaill](https://github.com/NickoMaill) - nicomaillols@gmail.com

lien du projet: [WeatherApp](https://github.com/NickoMaill/Weather-App)

## Ressources

Voici une liste d'outils et de librairies et de site qui m'ont été utiles dans mon projet

_Site_   

[Encryption key Generator](https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx)

_Libraries_

-   [express-handlebars](https://github.com/express-handlebars/express-handlebars)
-   [pg](http://github.com/brianc/node-postgres)
-   [nodemailer](https://nodemailer.com/about/)
-   [multer](https://github.com/expressjs/multer#readme)
-   [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
-   [cookie-parser](https://github.com/expressjs/cookie-parser#readme)


## Pour finir

J'espère que le projet vous plaira, travaillant seul sur ce projet il se peut que des fonctionnalités ne fonctionnent pas. Mais pas de panique je suis sûrement déjà au courant et mets tout en oeuvre pour régler ses différents bugs et problèmes. 
