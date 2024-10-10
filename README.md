# Stream Companion

Bienvenue dans **Stream Companion**, une application simple qui vous aide à gérer votre expérience de streaming en direct. Que vous soyez un passionné de diffusion en direct de jeux, d'événements sportifs ou de concerts, cette application vous permettra de suivre vos diffusions préférées, de recevoir des notifications et d'organiser vos contenus en un seul endroit.

<div align="center">
  <img src="./assets/stream_companion_screenshot.png" alt="App Screenshot" width="500"/> <!-- Remplacez par le chemin d'accès à votre capture d'écran -->
</div>

## Table des Matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Technologies](#technologies)
- [Utilisation](#utilisation)
- [Licence](#licence)

## Introduction

**Stream Companion** est un outil puissant conçu pour aider les streamers et créateurs de contenus à gérer et améliorer leur expérience de diffusion en direct. Avec une interface intuitive, cette application vous permet d'organiser vos événements, de suivre vos statistiques en temps réel et de recevoir des notifications pour maximiser votre engagement avec votre audience. Que vous diffusiez des jeux vidéo, des tutoriels ou des événements en direct, Stream Companion est votre partenaire idéal pour optimiser votre contenu et interagir avec votre communauté.

## Fonctionnalités

- **Gestion des Événements en Direct** : Planifiez et organisez vos diffusions en direct, et recevez des rappels pour ne jamais manquer une occasion.
- **Suivi des Statistiques** : Analysez vos performances en temps réel avec des statistiques détaillées sur le nombre de spectateurs, l'engagement et d'autres métriques essentielles.
- **Notifications Instantanées** : Recevez des alertes lorsque vous êtes sur le point de commencer une diffusion ou lorsque des événements importants se produisent dans votre communauté.
- **Interface Intuitive** : Profitez d'une interface conviviale qui facilite la navigation et l'organisation de vos contenus, permettant une expérience utilisateur fluide.
- **Personnalisation des Listes de Diffusion** : Créez des listes de contenus à diffuser pour planifier vos sessions de streaming et garder votre audience engagée.

## Installation

Pour exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/stream-companion.git
   ```

2. Naviguez dans le dossier du projet :

   ```bash
   cd stream-companion
   ```

3. Installez les dépendances :

   ```bash
   yarn
   ```

4. Exécutez le serveur de développement :

   ```bash
   yarn dev
   ```

L'application sera maintenant disponible à l'adresse `http://localhost:5173` (ou l'adresse configurée).

## Technologies

- **ElectronJS**: Un framework pour créer des applications de bureau multiplateformes.
- **TypeScript**: Un langage de programmation fortement typé qui améliore la qualité du code JavaScript.
- **ExpressJS**: Un framework pour Node.js qui simplifie le développement d'applications web.
- **PostgreSQL**: Une base de données relationnelle pour stocker vos données de streaming.
- **Node.js**: Un environnement JavaScript pour exécuter des scripts côté serveur.
- **Axios**: Une bibliothèque pour effectuer des requêtes HTTP.
- **Prettier** et **ESLint**: Outils pour le formatage et la vérification de la qualité du code.

## Utilisation

Une fois le projet en cours d'exécution localement, vous pouvez :

- **Ajouter des Contenus**: Utilisez le champ de saisie pour ajouter vos événements en direct préférés.
- **Gérer vos Événements**: Organisez vos diffusions par catégories et planifiez vos sessions de streaming.
- **Supprimer des Contenus**: Retirez les événements que vous n’avez plus l’intention de diffuser.

Pour créer une version de production, exécutez :

```bash
yarn build
```

Cela générera une version prête pour la production dans le dossier `build/`.

## Licence

MIT License

Copyright (c) 2024 Andy Vasseur

Permission est par la présente accordée, sans frais, à toute personne obtenant une copie de ce logiciel et des fichiers de documentation associés ("Stream Compagnion"), de traiter le Logiciel sans restriction, y compris sans limitation les droits d'utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, de sous-licencier et/ou de vendre des copies du Logiciel, et d'autoriser les personnes à qui le Logiciel est fourni à le faire, sous réserve des conditions suivantes :

La mention de copyright ci-dessus et cette mention de permission doivent être incluses dans toutes les copies ou parties substantielles du Logiciel.

LE LOGICIEL EST FOURNI "EN L'ÉTAT", SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS MAIS SANS S'Y LIMITER AUX GARANTIES DE COMMERCIALISATION, D'ADAPTATION À UN USAGE PARTICULIER ET DE NON-CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU LES DÉTENTEURS DU DROIT D'AUTEUR NE PEUVENT ÊTRE TENUS RESPONSABLES D'UNE RÉCLAMATION, DE DOMMAGES OU D'AUTRES RESPONSABILITÉS, QUE CE SOIT DANS UNE ACTION DE CONTRAT, DE TORT OU AUTRE, DÉCOULANT DE, OU EN LIEN AVEC, LE LOGICIEL OU L'UTILISATION OU D'AUTRES TRANSACTIONS DANS LE LOGICIEL.
