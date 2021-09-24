const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const {Collection} = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const { CLIENT_ID, DISCORD_TOKEN } = process.env;
const commands = new Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commandList = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commandList) {
        console.log(`Chargement de la commande ${file}`);
        const command = require(`./commands/${dirs}/${file}`);
        commands.set(command.name.toLowerCase(), command);
    };
});

const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);

rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands })
	.then(() => console.log('Commandes globales répertoriées.'))
	.catch(console.error);