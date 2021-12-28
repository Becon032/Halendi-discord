module.exports = {
    name: 'clan',
    description: "Adds users to discord roles based on reaction",
    async execute(Discord, client){

        const selectChannel = '881998670206218351';

        //clans
        const mossi = '881639026635997187';
        const virnue = '883385757379723375';
        const wigan = '882010903460057139';
        const issar = '881489987214901279';
        const feusagan = '923292467091099650';

        //clans emois
        const mosiEmoji = '🐒';
        const virnueEmoji = '🐐';
        const wiganEmoji = '🐗';
        const issarEmoji = '🧊';
        const feusaganEmoji = '🌲';

        //clan channels
        const mossiChannel = '885077884513972254';
        const virnueChannel = '884889025633222727';
        const wiganChannel = '885193367649124392';
        const issarChannel = '885582721680805898';
        const feusaganChannel = '925370015354617926';


        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == selectChannel){


                let userId = await reaction.message.guild.members.cache.get(user.id);


                //check if already user has one of that role

                if(userId.roles.cache.has(mossi)){
                    console.log("user has mossi role already");
                    return;
                } else if(userId.roles.cache.has(virnue)){
                    console.log("user has virnue role already");
                    return;
                } else if(userId.roles.cache.has(wigan)){
                    console.log("user has wigan role already");
                    return;
                }else if(userId.roles.cache.has(issar)){
                    console.log("user has issar role already");
                    return;
                }else if(userId.roles.cache.has(feusagan)){
                    console.log("user has feusagan role already");
                    return;
                }

                switch(reaction.emoji.name){
                    case mosiEmoji:
                        userId.roles.add(mossi);
                        client.channels.cache.get(mossiChannel).send('Welcome <@' + userId + '> to the red forests of Mosi!');
                        break;
                    case virnueEmoji:
                        userId.roles.add(virnue);
                        client.channels.cache.get(virnueChannel).send('Welcome <@' + userId + '> to the green fields of Virnue!');
                        break;
                    case wiganEmoji:
                        userId.roles.add(wigan);
                        client.channels.cache.get(wiganChannel).send('Welcome <@' + userId + '> to Clan Wigan!');
                        break;
                    case issarEmoji:
                        userId.roles.add(issar);
                        client.channels.cache.get(issarChannel).send('Welcome <@' + userId + '> to the land of Stone and Ice, Welcome to clan Issar!');
                        break;
                    case feusaganEmoji:
                        userId.roles.add(feusagan);
                        client.channels.cache.get(feusaganChannel).send('Welcome <@' + userId + '> to the seas of Feusagan!');
                        break;
                    default:
                        console.error("there is no emoji like that");
                        return;
                }
                    
            } else {
                return;
            }
            
        });
    }
}