const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
client.commands = new Collection();

fs.readdirSync('./commands').forEach(dirs => {
  const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

  for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      console.log(`Loading command ${file}`);
      client.commands.set(command.name.toLowerCase(), command);
  };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
  console.log(`Chargement de l'évenement ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

client.login(DISCORD_TOKEN);