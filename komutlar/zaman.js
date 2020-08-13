const Discord = require('discord.js');

exports.run = async (message, args) => {
    message.delete()
    if (!message.member.roles.find("name", "VK Yetkili")) {//değişin 
        return message.channel.send(' **Bu Komutu Kullanmak için** \*`VK Yetkili*\` **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }  let fc = message.guild.roles.find(a => a.name === "@everyone");
  if(message.channel.permissionsFor(fc).has('SEND_MESSAGES')) {
    message.channel.overwritePermissions(fc, {
      SEND_MESSAGES: false,
    });
    message.channel.send('Gece Oldu, İyi Şanslar Dostum.!')
  } else {
    message.channel.overwritePermissions(fc, {
      SEND_MESSAGES: null,
    });
    message.channel.send('Gündüz Oldu, Herkese Günaydın.!')
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['lock'],
  permLevel: 0
};

exports.help = {
  name: 'zaman',
  description: 'Kanalı kilitler.',
  usage: 'zaman',
  kategori: 'yetkili'
};