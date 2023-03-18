const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({intents : ['Guilds', 'GuildMessages', 'MessageContent']});
const fs = require('fs');
require('dotenv').config();

client.commands = new Discord.Collection();
const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(file of commands){
    const commandName = file.split('.')[0]
    const command = require(`./commands/${commandName}`);
    client.commands.set(commandName, command)
}

client.on('messageCreate', msg =>{
    if(msg.content.startsWith(process.env.PREFIX)){
        const args = msg.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
        const commandName = args.shift()
        const command = client.commands.get(commandName)
        if(!command) return msg.channel.send({content: `Command doesn't exists!`});
        command.run(client, msg, args);
    }
});

client.on('ready', ()=>{
    client.user.setPresence({activities : [{name : `Learning commands and APIs having prefix ${process.env.PREFIX}`, type : ActivityType.Learning}], status : 'idle'});
    console.log('Bot is ready!');
});

client.login(process.env.TOKEN);