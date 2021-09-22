module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    description: 'Teste la latence du bot',
    utilisation: '{prefix}ping',

    execute:(client, interaction)=>{
        interaction.reply(`Pong : **${client.ws.ping}ms** !`);
    },
};