module.exports.run = (client, msg, args)=>{

    if(msg.member.id === msg.guild.ownerId){
        const name = args[1];
        const User = msg.guild.members.cache.get(msg.mentions.users.first().id);
        User.setNickname(`ELD - ${name}`);
        msg.channel.send(`**Changed your name ${User} **`);
    }
    else{
        msg.channel.send(`You don't have access to set the nicknames.`);
    }
};

module.exports.name = 'setname'