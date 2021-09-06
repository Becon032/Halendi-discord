module.exports = {
    name: 'clan',
    description: "Adds users to discord roles based on reaction",
    async execute(Discord, client){

        const selectChannel = '881998670206218351';

        //clans
        const mossi = '881639026635997187';
        const feusagen = '882010816860266586';
        const virnue = '883385757379723375';
        const wigan = '882010903460057139';
        const issar = '881489987214901279';

        //clans emois
        const mosiEmoji = '🐒';
        const feusagenEmoji = '🌙';
        const virnueEmoji = '🐐';
        const wiganEmoji = '🐗';
        const issarEmoji = '🧊';


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
                } else if(userId.roles.cache.has(feusagen)){
                    console.log("user has feusagen role already");
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
                }

                switch(reaction.emoji.name){
                    case mosiEmoji:
                        userId.roles.add(mossi);
                        break;
                    case feusagenEmoji:
                        userId.roles.add(feusagen)
                        break;
                    case virnueEmoji:
                        userId.roles.add(virnue);
                        break;
                    case wiganEmoji:
                        userId.roles.add(wigan);
                        break;
                    case issarEmoji:
                        userId.roles.add(issar);
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