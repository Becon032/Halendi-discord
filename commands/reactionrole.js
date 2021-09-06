module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    userPermissions: ['ADMINISTRATOR'],
    async execute(message, arg, Discord, client) {

        const { MessageEmbed } = require('discord.js');
        const selectChannel = '881998670206218351';

        //clans emois
        const mosiEmoji = '🐒';
        const feusagenEmoji = '🌙';
        const virnueEmoji = '🐐';
        const wiganEmoji = '🐗';
        const issarEmoji = '🧊';


        if(message.channel.id === selectChannel){

            let embed;

            const mosiEmbed = new MessageEmbed()
                .setColor('#aabe14')
                .setTitle('Clan Mosi')
                .setDescription('The Mosi clan is a clan that is more based in forests. We use a Nordic aesthetic but with a cletic twist. we mainly will be dealing with hunting, wood and materjals. We encourage a warrior culture. We also encourage going out to sea and bringing back slaves. \n "To conquer or die"')
                .setImage('https://media.discordapp.net/attachments/869545485143248906/884245873272426496/80px-Clan_member_crest_badge_-_Clan_MacDougall.png?width=564&height=676');
            const feusagenEmbed = new MessageEmbed()
                .setColor('#e67a38')
                .setTitle('Clan Feusagen')
                .setDescription("The Feusagan Clan is a clan made up of sigma males who don't wear pants aka Norse Highlanders. We will run in the highlands wearing kilts with nothing underneath and then go back to our houses and bang your mothers.\n We can transform you from a sad beta playing minecraft to a SIGMA that is GAMING")
                .setImage('https://media.discordapp.net/attachments/884488168018182165/884489464750145586/Clan_Feusagan_Crest.png?width=564&height=676');
                
            const virnueEmbed = new MessageEmbed()
                .setColor('#1c5a07')
                .setTitle('Clan Virnue')
                .setDescription("The Virnue Clan waits for you! based on the Celtiberian culture this clan bases its economy in the Agriculture and animals wich are very important for our nation, we also encourage a warrior tradition meaning that we will be eager to create a powerful army for the nation!")
                .setImage('https://media.discordapp.net/attachments/869545485143248906/884246406242652220/Clan_Crest.png?width=564&height=676');
            
            const wiganEmbed = new MessageEmbed()
                .setColor('#22a21e')
                .setTitle('Clan Wīgan')
                .setDescription('We await your arrival, to join our renowned clan!\nHunting, fighting and carousing are the three core tenets of Clan Wīgan. We build in a unique design, placing a large focus on our renowned Brochs and Roundhouses. This clan is for those who want to hunt beasts and man alike; build sprawling revered settlements that will stand the test of time and to gather in our Brochs to drink and have a laugh.\n\nOur Motto is "ÆLÍF HUNTIAN ON ÆLÍF ALDOR" which translates from Wīgan speak to "Eternal hunting and Eternal life".')
                .setImage('https://images-ext-1.discordapp.net/external/ZMkxVkZzoCYMsxOrf9TtHYk05geMSIKmA2--yL3lRP0/https/cdn.mee6.xyz/guild-images/881266035104301138/3d7b8dc16a0f37e74173563145de22add0321bb4b69d3bff1893e8d210cfffd9.png?width=564&height=676');

            const issarEmbed = new MessageEmbed()
                .setColor('#4dabe7')
                .setTitle('Clan Issar')
                .setDescription('We are Clan Issar, if you wish to join a hardy clan living out in the frigid snowy wastes then we are the clan for you! Our leader prides himself in rebellious studies, making our clan the most scholarly out of all the others. So join today if you think you can survive out in the cold with us!')
                .setImage('https://media.discordapp.net/attachments/869545485143248906/884246905947840602/clan_emblem2.png?width=564&height=676');
        
            message.channel.send({ embeds: [mosiEmbed] });
            message.channel.send({ embeds: [feusagenEmbed] });
            message.channel.send({ embeds: [virnueEmbed] });
            message.channel.send({ embeds: [wiganEmbed] });
            message.channel.send({ embeds: [issarEmbed] });

        } else {
            message.channel.send('Wrong channel to use that command');
        }




        


    }
}