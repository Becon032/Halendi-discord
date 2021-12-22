module.exports = {
    name: 'suggestion',
    description: "this is a suggestion command",
    execute(message, args, author, client){

        const { MessageEmbed } = require('discord.js');
        const yesEmoji = "✅";
        const noEmoji = "❌";
        const channel = '923262027663802468';

        if(message.content == "?suggestion" || message.content == "?suggestion ") { return; }

        //client.channels.cache.get(channel).send('New suggestion!');

        const suggestion = new MessageEmbed()
            .setColor('#e9f72c')
            .setTitle('From: ' + author.username)
            .setDescription(message.content.replace('?suggestion', ""))


            client.channels.cache.get(channel).send({ embeds: [suggestion] }).then(function (message) {
            message.react(yesEmoji)
            message.react(noEmoji)
            }).catch(function() {
            msg.channel.send("i am broken now, idk why")
        });
        message.delete();

    }
}