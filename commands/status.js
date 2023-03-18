module.exports.run = (client, msg, args)=>{
    msg.channel.send(`You just said -  ${args.join(' ')}`);
};

module.exports.name = 'status';