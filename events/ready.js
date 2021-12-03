module.exports = async (client) => {
    const now = new Date();
    console.log(`(${now.toLocaleDateString()} ${now.toLocaleTimeString()}) Connecté en tant que ${client.user.tag} sur ${client.guilds.cache.size} serveurs`);
    client.user.setActivity("faire des tests", { type: "PLAYING"});
};
