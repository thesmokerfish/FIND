const Discord = require('discord.js');
const client = new Discord.Client();

// Liste des IDs autorisés
const authorizedUsers = ['1234567890']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.content.startsWith('!find')) {
    // Vérifier si l'utilisateur est autorisé
    if (!authorizedUsers.includes(message.author.id)) {
      message.reply('❌ Vous n\'êtes pas autorisé à utiliser cette commande.');
      return;
    }

    // Récupérer l'argument mentionné après !find
    const args = message.content.slice('!find'.length).trim().split(/ +/);
    const mention = args[0];

    // Vérifier si l'argument est une mention valide
    const mentionRegex = /^(<@!?)(\d+)>$/;
    const idRegex = /^\d+$/;
    let memberId = null;

    if (mention.match(mentionRegex)) {
      memberId = mention.match(mentionRegex)[2];
    } else if (mention.match(idRegex)) {
      memberId = mention;
    } else {
      message.reply('Veuillez mentionner une personne valide ou fournir un ID. ❌');
      return;
    }

    let foundMember = false; // Indicateur si le membre est trouvé dans un salon vocal

    // Rechercher le membre dans tous les serveurs où le bot se trouve
    client.guilds.cache.forEach((guild) => {
      const member = guild.members.cache.get(memberId);

      if (member) {
        const voiceChannel = member.voice.channel;

        if (voiceChannel) {
          message.reply(`✅ ${member.displayName} est dans le salon vocal ${voiceChannel.name} dans le serveur ${guild.name}.`);
          foundMember = true;
        }
      }
    });

    // Si le membre n'est pas trouvé dans aucun salon vocal
    if (!foundMember) {
      message.reply('❌ Impossible de trouver ce membre dans les salons vocaux des serveurs où je suis.');
    }

    // Supprimer la commande
    message.delete().catch(console.error);
  }
});

// Remplacez 'YOUR_BOT_TOKEN' par le token de votre bot Discord
client.login('');
