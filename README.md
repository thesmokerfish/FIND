# Bot Discord de Recherche de Membres 🤖

Ce bot Discord est conçu pour rechercher un membre spécifique et déterminer s'il se trouve dans un salon vocal sur les serveurs où le bot est présent. Seuls les utilisateurs autorisés peuvent exécuter la commande de recherche.

## Fonctionnalités ✨
- Vérifie l'autorisation des utilisateurs avant d'exécuter la commande.
- Recherche le membre spécifié dans tous les serveurs où le bot est présent.
- Affiche le nom du salon vocal où le membre se trouve s'il est trouvé.
- Supprime la commande de recherche après l'exécution.

## Prérequis ⚙️
- Node.js version 12.0.0 ou supérieure
- Un compte bot Discord et un token pour le bot (obtenez-le dans le portail des développeurs Discord)

## Installation 🧑‍💻
1. Clonez ou téléchargez ce référentiel sur votre machine.
2. Ouvrez une invite de commande dans le répertoire du projet.
3. Installez les dépendances en exécutant la commande suivante : npm install discord.js

4. Ouvrez le fichier `index.js` dans un éditeur de texte.
5. Remplacez `'YOUR_BOT_TOKEN'` par le token de votre bot Discord.
6. Dans la section `authorizedUsers`, ajoutez les IDs des utilisateurs que vous souhaitez autoriser à utiliser la commande `!find`.
7. Enregistrez les modifications.

## Utilisation 🤔
1. Invitez votre bot sur votre serveur Discord en utilisant le lien généré par Discord.
2. Assurez-vous que le bot dispose des autorisations appropriées pour voir les membres et accéder aux salons vocaux.
3. Dans l'invite de commande, accédez au répertoire du projet et exécutez la commande suivante :

4. Votre bot Discord est maintenant en ligne et prêt à être utilisé.
5. Dans un canal texte de votre serveur Discord, utilisez la commande `!find` suivie d'une mention ou d'un ID de membre pour rechercher le membre dans les salons vocaux.
6. Le bot affichera un message indiquant si le membre est trouvé dans un salon vocal et, le cas échéant, le nom du salon vocal.

**Note :** Seuls les utilisateurs autorisés peuvent exécuter la commande `!find`. Si un utilisateur non autorisé essaie d'utiliser la commande, le bot affichera un message d'erreur.

## Contributions 👥
Les contributions à ce projet sont les bienvenues. Si vous souhaitez apporter des améliorations ou corriger des problèmes, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence 📄
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer selon les termes de cette licence.
