# Comment créer son bot à partir de ce modèle

## Installation
- Créer un projet à partir de ce modèle en cliquant sur le bouton `Use this template` depuis la page : https://github.com/Pingumask/Discord-bot-template
  
- Cloner le projet nouvellement créé (à partir du bouton `code` au dessus de la liste des fichiers)

- Installer les dépendences en exécutant la commande suivante dans le dossier du projet : 
```bash
npm install
```

- Renommer le fichier `.env.template` en `.env`

## Configuration

- Créer une application discord à partir de : https://discord.com/developers/applications

- Depuis la page des réglages de l'application, se rendre dans l'onglet "Bot" et récupérer le token et le copier dans `.env` pour la clef `DISCORD_TOKEN` 

- Dans l'onglet Oauth2, récupérer le CLIENT ID et le copier dans `.env` pour la clef `CLIENT_ID`

- Activer le mode développeur sur discord dans les parametres avancés

- Récupérer l'identifiant du serveur discord sur lequel seront effectués les tests en cours de développement et le copier dans `.env` pour la clef `GUILD_ID`

## Invitation du bot

- Dans l'onglet OAuth2 > URL Generator
  - Sélectionner les scopes nécessaires au bot (au minimum : bot et applications.commands)
  - Sélectionner les permissions necessaires au bot :
    - Si le bot est destiné à rester purement privé, autant le mettre directement administrateur pour ne pas être embété par des permissions manquantes à l'avenir. 
    - Si le bot doit devenir disponible publiquement, mieux vaut en selectioner un peu trop que pas assez en pensant aux éventuelles fonctionalités futures, car si une nouvelle fonctionalité necessite un droit qui n'avait pas été accordé précédement, elle ne fonctionnera pas comme prévu sur les serveurs qui l'avaient invité avant à moins que leurs administrateurs ne modifient manuellement les droits du bot. Attention cependant, accorder au bot des droits qui semblent injustifier peut entrainer la méfiance des gens qui voudraient l'inviter et réduire sa popularité.

## Référencement des commandes

- Pour rendre les commandes du bot disponibles immédiatement sur le serveur de test défini dans le fichier `.env`, utiliser la tache `Guild register` : 
    ```bash
    node register-guild.js
    ```
- Pour référencer les commandes du bot pour l'ensemble des serveur sur lequel il est présent avec un délai maximum d'une heure, utiliser la tache `Global register` :
    ```bash
    node register-global.js
    ```
- Pour supprimer l'enregistrement particulier du serveur de tests (notament pour eviter l'apparition des commandes en double une fois le referencement global effectif), utiliser la tache `Guild unregister` :
    ```bash
    node unregister-guild.js
    ```
## Démarrage du bot

- Pour démarrer le bot, executer la tache `Bot run` :
    ```bash
    npm run start
    ```

- Pour que le bot démarre automatiquement lors de l'ouverture de son dossier dans vscode :
  - Dans le fichier `/.vscode/tasks.json` modifier la tache `Bot run` pour lui ajouter la clef suivante :
    ```json
        "runOptions": {
            "runOn": "folderOpen"
        }
    ```
  - Dans vscode utiliser le raccourci `ctrl+p` puis saisir `>tasks` et selectionner `>Tasks: Manage Automatic Tasks in Folder`

## Création de nouvelles commandes

Pour créer une nouvelle commande, créer un nouveau fichier js dans un sous-dossier du dossier `commands` en prenant modèle sur les commandes fournies.

D'autres commandes peuvent être prises pour modèle sur un bot que j'ai créé à partir du présent template : https://github.com/Pingumask/PlectrumV2

Lors de l'ajout ou de la suppression d'une commande, ne pas oublier d'executer les taches de référencement évoquées plus tôt dans ce fichier afin de les voir apparaitre

Le bot se basant sur la librairie `Discordjs`, se référer à leur documentation et leurs guides pour développer des commandes plus complexes : https://discord.js.org/
