module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    userPermissions: ['ADMINISTRATOR'],
    async execute(message, arg, Discord, client) {

        const { MessageEmbed } = require('discord.js');
        const selectChannel = '881998670206218351';

        //clans emois
        const mosiEmoji = '🐒';
        const virnueEmoji = '🐐';
        const wiganEmoji = '🐗';
        const issarEmoji = '🧊';


        if(message.channel.id === selectChannel){

            let embed;

            const mosiEmbed = new MessageEmbed()
                .setColor('#aabe14')
                .setTitle('Clan Mosi')
                .setDescription('We are clan Mosi. We are clan that will fight for our will to live, we are a clan that will not stray away from a fight. We live in The  Great Red Forest and in the Great Three Lakes. We have a small proud navy that protects our coastline and we have local magic and hunting tradition. We have a saying in the Mosi clan "if you die and you have not seen combat have you really lived a life".')
                .setImage('https://media.discordapp.net/attachments/886997306778460190/923228940083007548/mosi3.png?width=564&height=676');
                
            const virnueEmbed = new MessageEmbed()
                .setColor('#1c5a07')
                .setTitle('Clan Virnue')
                .setDescription("The Virnue Clan waits for you! based on the Celtiberian culture this clan bases its economy in the Agriculture and animals wich are very important for our nation, we also encourage a warrior tradition meaning that we will be eager to create a powerful army for the nation!")
                .setImage('https://cdn.discordapp.com/attachments/862102425649152010/885149663735455765/virnueCrest.png?width=564&height=676');
            
            const wiganEmbed = new MessageEmbed()
                .setColor('#22a21e')
                .setTitle('Clan Wīgan')
                .setDescription('We await your arrival, to join our renowned clan!\nHunting, fighting and carousing are the three core tenets of Clan Wīgan. We build in a unique design, placing a large focus on our renowned Brochs and Roundhouses. This clan is for those who want to hunt beasts and man alike; build sprawling revered settlements that will stand the test of time and to gather in our Brochs to drink and have a laugh.\n\nOur Motto is "ÆLÍF HUNTIAN ON ÆLÍF ALDOR" which translates from Wīgan speak to "Eternal hunting and Eternal life".')
                .setImage('https://cdn.discordapp.com/attachments/881292261248348231/921479120511172628/ClanWiganSmall.png?width=564&height=676');

            const issarEmbed = new MessageEmbed()
                .setColor('#4dabe7')
                .setTitle('Clan Issar')
                .setDescription('We are Clan Issar, if you wish to join a hardy clan living out in the frigid snowy wastes then we are the clan for you! Our leader prides himself in rebellious studies, making our clan the most scholarly out of all the others. So join today if you think you can survive out in the cold with us!')
                .setImage('https://media.discordapp.net/attachments/869545485143248906/884246905947840602/clan_emblem2.png?width=564&height=676');
        
            message.channel.send({ embeds: [mosiEmbed] });
            message.channel.send({ embeds: [virnueEmbed] });
            message.channel.send({ embeds: [wiganEmbed] });
            message.channel.send({ embeds: [issarEmbed] });

        } else {
            message.channel.send('Wrong channel to use that command');
        }




        


    }
}