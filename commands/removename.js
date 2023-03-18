module.exports.run = (client, msg, args)=>{

    if(msg.member.id === msg.guild.ownerId){
        const User = msg.guild.members.cache.get(msg.mentions.users.first().id);
        User.setNickname('');
        msg.channel.send(`**Changed your name to your default ${User} **`);
    }
    else{
        msg.channel.send(`You don't have access to set the nicknames.`);
    }
};

module.exports.name = 'removename'