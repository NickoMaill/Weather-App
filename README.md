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

## A propos du projet

Weather App est avant tout un projet réalisé dans le cadre de la formation Développeur Web Fullstack dispensé par l'école Konexio. Au départ c'est appli fu codé en React, mais depuis j'ai pris la décision de la convertir en Appli mobile. 
Dans cette appli vous pourrez consultez la météo de n'importe quelle ville, sauvegarder jusqu'a 3 météo en favoris et initialiser vous même votre ville par défault (au départ celle renseigner dans votre adresse via formulaire d'inscription). 

### Fabriqué avec

Vous trouverez ici tout les technologie utiliséé pour ce projet (cette est section sûrement vouée à évoluer)

_Backend_

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [PGAdmin4](https://www.pgadmin.org/)

_Frontend_

-   [React native](https://reactnative.dev/)
-   [Expo](https://expo.dev/)

### Prerequisites
_Sans ces pré-requis il sera difficile de tester notre application météo_

Pour tester notre application en mode "développeur", vous aurez besoin :

1. d'un éditeur de texte de type : vscode, sublimeText, Froala etc ...

2. Node js installé (ci ce n'est pas fait, vous pouvez aller sur le site https://nodejs.org/en/download/ pour télécharger le package et ensuite installez le)

3. Avoir installer les packages manager npm et yarn (npm est normalement installé automatiquement à l'installation de NodeJS pour le vérifié tapez dans votre terminal `npm --version`). Pour installer yarn taper la commande `npm install -g yarn`, si vous êtes sur mac ou linux et que la commande vous renvoi une erreur essayer avec celle ci `sudo npm install -g yarn`.

### Installation

_Suivez bien les étapes de l'installation elle peut être fastidieuse_

1. Inscrivez vous et procurez vous une clé API sur [OpenWeather](https://example.com) --> Current Weather Data --> Subscribe
2. Clonez le repo
    ```sh
    git clone https://github.com/NickoMaill/Weather-App.git
    ```
3. Installez les packages dans le dossier Back 
    ```sh
    npm install
    ```
4. Istallez les packages dans le dossier Front
    ```sh
    npm install
    ```
5. Dans le dossier Back, créez à la racine de ce dernier, un fichier `config.env` dans lequel nous allons stocké toutes nos variables d'environnements
    ```env
    PGHOST="l'adress serveur de votre base de donnée"
    PGDATABASE="le nom de votre base de donnée"
    PGUSER="le nom d''utilisateur"
    PGPORT="le port utilisé (pour PostgreSQL le port sera toujours à 5432)
    PGPASSWORD="le mot de passe de votyre base de donnée"
    SECRET="ici généré une "key" a l'aide d'un générateur comme "[Encryption Key Generator](https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx)
    SERVICE_MAIL="le service d'email souhaitez"
    USER_MAIL="votre email"
    PASSWORD_MAIL="le mot de passe de votre email"
    ```
    ces informations sont sensibles, ne vous inquiétez pas, si vous avez bien suivis les instruction, dans ce fichier elle ne risque rien 

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [x] Add Changelog
-   [x] Add back to top links
-   [ ] Add Additional Templates w/ Examples
-   [ ] Add "components" document to easily copy & paste sections of the readme
-   [ ] Multi-language Support
    -   [ ] Chinese
    -   [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

-   [Choose an Open Source License](https://choosealicense.com)
-   [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
-   [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
-   [Malven's Grid Cheatsheet](https://grid.malven.co/)
-   [Img Shields](https://shields.io)
-   [GitHub Pages](https://pages.github.com)
-   [Font Awesome](https://fontawesome.com)
-   [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
