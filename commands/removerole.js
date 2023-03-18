module.exports.run = (client, msg, args)=>{

    if(msg.member.id === msg.guild.ownerId){
        const roleID = process.env.ROLE;
        const User = msg.guild.members.cache.get(msg.mentions.users.first().id);
        User.roles.remove(roleID);
        msg.channel.send(`**Testing is in process**, kindly wait.. Removing Staff role to you ${User}`);
    }
    else{
        msg.channel.send(`You don't have access to remove the roles.`);
    }
};

module.exports.name = 'addrole'