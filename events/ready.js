module.exports = async (client) => {
    console.log(`Connecté en tant que ${client.user.username}. Prêt sur ${client.guilds.cache.size} serveurs`);
    client.user.setActivity('Fait des tests');
};