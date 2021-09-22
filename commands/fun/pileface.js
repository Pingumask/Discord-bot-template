module.exports = {
    name: 'pileface',
    category: 'fun',
    description: 'Tire à pile ou face',
    utilisation: '{prefix}pileface',
    execute:(client, interaction)=>{
        const phrases =[
            "Pile",
            "Face",
        ];
        const reponse = phrases[Math.floor(Math.random()*phrases.length)];
        interaction.reply(`${interaction.member} lance une piece \`${reponse}\``);
    },
};