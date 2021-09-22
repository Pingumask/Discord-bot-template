module.exports = {
    name: 'carte',
    category: 'fun',
    description: 'Tire une carte',
    utilisation: '{prefix}carte',
    execute:(client, interaction)=>{
        const valeurs =["A","2","3","4","5","6","7","8","9","10","V","D","R"];
        const symboles =["♠","♥","♣","♦"];
        const valeur = valeurs[Math.floor(Math.random()*valeurs.length)];
        const symbole = symboles[Math.floor(Math.random()*symboles.length)];
        interaction.reply(`${interaction.member} tire la carte \`${symbole}${valeur}\``);
    },
};