# Préparation de l'environnement
1. Installer [Node v16.14.2](https://nodejs.org/dist/v16.14.2/)

# Installation
1. Si ce n'est pas déjà le cas installer [Git](https://git-scm.com/downloads)
2. Cloner le repo
3. Installer les dépendences npm avec
> npm run i
4. Une fois dans le repo, créer un fichier nommé .env à la racine du projet et récupérer les variables depuis le discord

# Commandes
Le projet a été conçu pour fonctionner avec 2 modes de dev.
1. dev-local (appel vers la BdD en local)
2. dev-hosted (appel vers la BdD sur le serveur)

La liste des commandes pour démarrer le projet en fonction est la suivante :
* Démarrer en dev-local
> npm run dev-local
* Démarrer en dev-hosted
> npm run dev-hosted
