const { EmbedBuilder } = require("discord.js");

module.exports.run = (client, msg, args)=>{

    if(msg.member.id === msg.guild.ownerId){

        const roleID = process.env.ROLE;
        const User = msg.guild.members.cache.get(msg.mentions.users.first().id);
        User.roles.add(roleID);
        const embed = new EmbedBuilder().setDescription(`${User} **Assign staff role to you!**`).setColor(0x0099FF);
        msg.channel.send({embeds : [embed]});
    }
    else{
        msg.channel.send(`You don't have access to add the roles.`);
    }

};

module.exports.name = 'addrole'