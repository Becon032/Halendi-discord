module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    userPermissions: ['ADMINISTRATOR'],
    async execute(message, arg, Discord, client) {

        const { MessageEmbed } = require('discord.js');
        const selectChannel = '881998670206218351';

        //clans emois
        const mosiEmoji = 'π';
        const virnueEmoji = 'π';
        const wiganEmoji = 'π';
        const issarEmoji = 'π§';
        const feusaganEmoji = 'π²';


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
                .setDescription("The Virnue Clan waits for you! based on the Celtiberian culture this clan bases its economy in the Agriculture and animals with are very important for our nation, we also encourage a warrior tradition meaning that we will be eager to create a powerful army for the nation!")
                .setImage('https://cdn.discordapp.com/attachments/862102425649152010/885149663735455765/virnueCrest.png?width=564&height=676');
            
            const wiganEmbed = new MessageEmbed()
                .setColor('#22a21e')
                .setTitle('Clan WΔ«gan')
                .setDescription('We await your arrival, to join our renowned clan!\nHunting, fighting and carousing are the three core tenets of Clan WΔ«gan. We build in a unique design, placing a large focus on our renowned Brochs and Roundhouses. This clan is for those who want to hunt beasts and man alike; build sprawling revered settlements that will stand the test of time and to gather in our Brochs to drink and have a laugh.\n\nOur Motto is "ΓLΓF HUNTIAN ON ΓLΓF ALDOR" which translates from WΔ«gan speak to "Eternal hunting and Eternal life".')
                .setImage('https://cdn.discordapp.com/attachments/881292261248348231/921479120511172628/ClanWiganSmall.png?width=564&height=676');

            const issarEmbed = new MessageEmbed()
                .setColor('#4dabe7')
                .setTitle('Clan Issar')
                .setDescription('We are Clan Issar, if you wish to join a hardy clan living out in the frigid snowy wastes then we are the clan for you! Our leader prides himself in rebellious studies, making our clan the most scholarly out of all the others. So join today if you think you can survive out in the cold with us!')
                .setImage('https://media.discordapp.net/attachments/869545485143248906/884246905947840602/clan_emblem2.png?width=564&height=676');

            const feusagenEmbed = new MessageEmbed()
                .setColor('#4dabe7')
                .setTitle('Clan Feusagan')
                .setDescription('Hello! We are Clan Feusagan \n\nBuilding, fighting, taming beasts, and civilizing the forests are what we sigma Feusagans are about. We are a seafaring clan, the leader Odin is notorious for his longboats that he built with his own 2 hands. Come to our village in Turtarheim, I will invite you into my home, make you a kilt, and take you sailing. \n\nOur motto represents our values which are βPower oβ mindset, braun oβ body.β')
                .setImage('https://cdn.discordapp.com/attachments/884488168018182165/884489464750145586/Clan_Feusagan_Crest.png?width=564&height=676');
        
            message.channel.send({ embeds: [mosiEmbed] }).then(function (message) {
                message.react(mosiEmoji)
                }).catch(function() {
                //msg.channel.send("i am broken now, idk why")
            });
            message.channel.send({ embeds: [virnueEmbed] }).then(function (message) {
                message.react(virnueEmoji)
                }).catch(function() {
                //msg.channel.send("i am broken now, idk why")
            });
            message.channel.send({ embeds: [wiganEmbed] }).then(function (message) {
                message.react(wiganEmoji)
                }).catch(function() {
                //msg.channel.send("i am broken now, idk why")
            });
            message.channel.send({ embeds: [issarEmbed] }).then(function (message) {
                message.react(issarEmoji)
                }).catch(function() {
                //msg.channel.send("i am broken now, idk why")
            });
            message.channel.send({ embeds: [feusagenEmbed] }).then(function (message) {
                message.react(feusaganEmoji)
                }).catch(function() {
                //msg.channel.send("i am broken now, idk why")
            });

        } else {
            message.channel.send('Wrong channel to use that command');
        }




        


    }
}