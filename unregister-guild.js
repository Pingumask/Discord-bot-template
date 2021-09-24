const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const {Collection} = require('discord.js');
require('dotenv').config();
const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = process.env;
const commands = new Collection();

const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: {} })
	.then(() => console.log('Commandes de guilde supprimées.'))
	.catch(console.error);