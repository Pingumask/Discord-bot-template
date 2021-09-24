const { MessageEmbed } = require('discord.js');
const cooldown = {};

module.exports = {
    name: 'calin',
    category: 'fun',
    description: 'Fait un calin aux gens',
    utilisation: '{prefix}calin [destinataire]',
    options:[
        {
            name:'destinataire',
            description:'A qui faire le calin',
            type:3,//type 3 = STRING
            required:false,
        },
    ],
    execute: async (client, interaction)=>{
        const TIMER = 300000;
        if (cooldown[interaction.guild.id]===undefined) cooldown[interaction.guild.id] ={}
        if(cooldown[interaction.guild.id][interaction.member.id]){
            let end = new Date(cooldown[interaction.guild.id][interaction.member.id]);
            await interaction.reply({ content: `Tu fais ça trop souvent, attends jusqu'à ${end.toLocaleTimeString()} pour ton prochain calin`, ephemeral: true });
            return;
        }
        cooldown[interaction.guild.id][interaction.member.id] = Date.now() + TIMER;
        setTimeout(()=>{
            delete cooldown[interaction.guild.id][interaction.member.id];
        }, TIMER);

        const images =[
            'https://c.tenor.com/DxMIq9-tS5YAAAAC/milk-and-mocha-bear-couple.gif',
            'https://c.tenor.com/vVBFWMH7J9oAAAAC/hug-peachcat.gif',
            'https://c.tenor.com/wqCAHtQuTnkAAAAC/milk-and-mocha-hug.gif',
            'https://c.tenor.com/FduR7Yr84OQAAAAC/milk-and-mocha-kiss.gif',
            'https://c.tenor.com/jX1-mxefJ54AAAAC/cat-hug.gif'
        ]
        const picked = images[Math.floor(Math.random() * images.length)];
        const calin = interaction.options.getString('destinataire') ?? '... Ha ! ... Bah, il a oublié de dire à qui';
        let messageEmbed = new MessageEmbed()
            .setDescription(`${interaction.member} fait un calin à ${calin} <3.`)
            .setImage(picked)
        await interaction.reply({embeds:[messageEmbed]});
        messageEmbed.setImage(null);
        setTimeout(()=>interaction.editReply({embeds:[messageEmbed]}),25000);
    },
};