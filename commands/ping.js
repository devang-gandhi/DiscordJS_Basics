module.exports.run = (client, msg, args)=>{
    msg.channel.send(`<@${msg.member.id}> 🏓Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}

module.exports.name = 'ping';