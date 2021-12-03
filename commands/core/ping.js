module.exports = {
    name: 'ping',
    category: 'Infos',
    description: 'Teste la latence du bot',
    utilisation: '{prefix}ping',

    execute: async (client, interaction)=>{
        interaction.reply(`Pong : **${client.ws.ping}ms** !`);
    },
};
