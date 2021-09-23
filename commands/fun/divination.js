module.exports = {
    name: 'divination',
    category: 'fun',
    description: 'Donne une réponse aléatoire',
    utilisation: '{prefix}divination [question]',
    options:[
        {
            name:'question',
            description:'La question à laquelle le bot va répondre',
            type:3,//type 3 = STRING
            required:false,
        },
    ],
    execute:(client, interaction)=>{
        const phrases =[
            "Oui",
            "Bien sûr",
            "Tout à fait",
            
            "Ca se pourrait",
            "Peut être",
            "C'est pas impossible",
            "Ptêt bein qu'oui, Ptêt bein qu'non",

            "Lol nope",
            "Non",
            "Et la marmotte, elle met le chocolat dans le papier alu",
        ];
        const reponse = phrases[Math.floor(Math.random()*phrases.length)];
        const question = interaction.options.getString('question');
        if (question) interaction.reply(`${interaction.member} me demande \`${question}\` \nMa réponse est \`${reponse}\``);
        else interaction.reply(reponse);
    },
};