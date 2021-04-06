const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
const client = new Discord.Client();
const { Menu } = require('discord.js-menu')
const fs = require('fs');
const { waitForDebugger } = require('inspector');
const infot = require('statsbot.json')
let atsp = JSON.parse(fs.readFileSync("atsp.json", "utf8"))
let data = JSON.parse(fs.readFileSync("data.json", "utf8"))
let infoj = JSON.parse(fs.readFileSync("jeux.json", "utf8"))
let Warnlist = JSON.parse(fs.readFileSync("warn.json", "utf8"))

let prefix = '.'


client.once('ready', () => {
    console.log('ready');

    client.user.setPresence({activity: {name: 'with my own code 0-0'},status: 6
            })

  .catch(console.error);
})

client.on('error', console.error); // Afficher les erreurs
client.on('error', (message) => {

    


let cons0le =  message.guild.channels.cache.find(ch => ch.id === '824754680646336533');

    cons0le.send(err)
})

client.on('guildMemberAdd', user => {


			let bienvenue = new Discord.RichEmbed()
				.setColor('RANDOM')
				.setTitle(`Bienvenue ${user}`)
				.setThumbnail(user.avatarURL)
				.addField(`Tu es le ${memberCount}`)
				.setFooter(`Rejoind le ${user.joinedTimestamp}`)



			message.channel.get('').send(bienvenue)
		


})

client.on('message', (message) => {



    let user = message.author
    
    
    if(message.author.bot) return;
    if(message.content == '.rank' | '.help') return;
    if(message.channel.id === '825846181875417098') return;

    if(!data[user.id]){
        data[user.id] = {
            "Profil": user.username, 
            "XP": 0,
            "Levels": 1,
            "LevelUP": 0
        }
        
}

    fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
    if(err) console.log("Une erreur est survenue");
        }); 

    var Proclevel = 250 * data[user.id].Levels
    var xxp = Math.floor(Math.random() * (15 - 10 + 1) + 10) ;

    data[user.id].XP = data[user.id].XP + xxp;
    data[user.id].LevelUP = Proclevel; 
		fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
            console.log(user.username, '+', xxp)
            
			if(err){
                cons0le.send(err)
                console.log("Une erreur est survenue");
            } 
		}); //Permet de sauvegarder dans le fichier json

        if(data[user.id].XP >= Proclevel){
            data[user.id].XP = 0;
            data[user.id].Levels++; 
            message.reply(`Bravo, tu es maintenant niveau ${data[user.id].Levels}`)
		fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
			if(err) console.log("Une erreur est survenue");
		}); //Permet de sauvegarder dans le fichier json

        }
 
})

client.on('message', (message, member) => {

   if(message.content === '.rank'){
       let user = message.author

    let rankembed = new Discord.MessageEmbed()
                .setTitle(`Level de ${user.username}`)
                .setThumbnail(user.displayAvatarURL())
                .setColor('RANDOM')
                .addField('Niveaux:', data[user.id].Levels)
                .addField('Prochain niveau dans', data[user.id].LevelUP - data[user.id].XP)
            message.channel.send(rankembed)

   } 
   let prefix = '.'
   if (message.content.startsWith(prefix + 'mp')) {
    //if(!message.author.id === '411901100313149441') return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let msg = args.join(" ").slice(2)

    388412357870878720
   const cible = message.mentions.members.first()
    if (!cible) return;

    cible.send(msg);
   }
   
})

client.on('message', (message) => {

    if(message.channel.id === '825846181875417098'){
            
            if(message.content > infoj.suitedenombre + 1){
                console.log(infoj.suitedenombre)
                message.delete()
            }else if(message.content <= infoj.suitedenombre){
                    console.log(infoj.suitedenombre)
                    message.delete()
            }else if(message.content != infoj.suitedenombre + 1){
                    console.log(infoj.suitedenombre)
                    message.delete()
            }else if(message.content = infoj.suitedenombre + 1){
               infoj.suitedenombre = infoj.suitedenombre + 1
               console.log(infoj.suitedenombre)
               fs.writeFile("./jeux.json", JSON.stringify(infoj, null, 2), (err) => {
                if(err) console.log("Une erreur est survenue");
            }); //Permet de sauvegarder dans le fichier json
    
            }
    
    } 
 })
 



 client.on('message', (message) => {

    let user = message.author

    if(!atsp[user.id]){
        atsp[user.id] = {
            "Profil": user.username, 
            "Nombredemssage": 1,
            "délai": 0 
        }

        fs.writeFile("./atsp.json", JSON.stringify(atsp, null, 2), (err) => {
            if(err) console.log("Une erreur est survenue");
        }); //Permet de sauvegarder dans le fichier json
        
}else{
        
    setInterval(function(astp){ 
        let atsp = JSON.parse(fs.readFileSync("atsp.json", "utf8"))
        let user = message.author
        astp[user.id].délai + 0.1
        fs.writeFile("./atsp.json", JSON.stringify(atsp, null, 2), (err) => {
            if(err) console.log("Une erreur est survenue");
        }); //Permet de sauvegarder dans le fichier json
    }, 100);
    fs.writeFile("./atsp.json", JSON.stringify(atsp, null, 2), (err) => {
        if(err) console.log("Une erreur est survenue");
    }); //Permet de sauvegarder dans le fichier json
}

 
 })
 //________________________________________________________________________________warn

 client.on('message', message => {

    if(!message.content.startsWith('.warn')) return
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!')
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.')
    
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Please specify a user');

    if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');

    //if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t warn yourself!');

    let reason = args.slice(2).join(" ");

    if(!reason) reason = 'Unspecified';

    if(!Warnlist[member.id]){
        Warnlist[member.id] = {
            "Profil": member.username, 
            "Warn": 0,
            "raison":[
                
            ]
        }
}

    Warnlist[member.id].Warn++; //Ajoute 1 warn à la personne mentionnée
    Warnlist[member.id].raison.push(`warn${Warnlist[member.id].Warn}: ${reason}`)
    fs.writeFile("./warn.json", JSON.stringify(Warnlist, null, 2), (err) => {
        if(err) message.channel.send("Une erreur est survenue");
    }); //Permet de sauvegarder dans le fichier json


   

    const warnembed = new Discord.MessageEmbed()
    .setTitle('Membre warn')
    .addField('Utilisateurs warn', member)
    .addField('warn par', message.author)
    .addField('Raison', reason)
    .setTimestamp()

    message.channel.send(warnembed);
     
 })

 client.on('message', message => {

    let user = message.author

    

    if(!message.content.startsWith('.listwarn')) return
    if(!message.member.hasPermission("MANAGE_MESSAGES"))  {

        if(!Warnlist[user.id]) return message.reply('tu n\'as pas de warn')

        const lwarnembedp = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription('Tes warns')
        .addField('**Nombre de Warn:** ', Warnlist[user.id].Warn)
        .addField('**Raisons:** ', Warnlist[user.id].raison)

        message.channel.send(lwarnembedp)

    }
   
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Please specify a user');

    if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');

		if(!Warnlist[member.id]) return message.reply('Ce membre n\'a pas de Warn')
			


		const lwarnembed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`Les warns de ${member.username}`)
        .addField('**Nombre de Warn:** ', Warnlist[member.id].Warn)
        .addField('**Raisons:** ', Warnlist[member.id].raison)

			message.channel.send(lwarnembed)


	
    
});

client.on("message",  message => {

})



 
 client.on('message', message => {
    // Ignore messages that aren't from a guild
    if(!message.content.startsWith('.ban')) return
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!args[0]) return message.channel.send('Please specify a user');

    if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
    if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

    if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');

    let reason = args.slice(2).join(" ");

    if(!reason) return message.reply('Il doit avoir une raison')

    member.send({ files: ['./memeban.mp4'] })

   member.ban(`${reason}`).catch(err => { 
      message.channel.send('Something went wrong')
        console.log(err)
   })

    const banembed = new Discord.MessageEmbed()
    .setTitle('Membre Banni')
    .setThumbnail(member.user.displayAvatarURL())
    .addField('Utilisateurs banni', member)
    .addField('banni par', message.author)
    .addField('Raison', reason)
    .setFooter('Time Ban', client.user.displayAvatarURL())
    .setTimestamp()

    message.channel.send(banembed);
  });
/*client.on('message', message => {

    if(!message.channel.type === 'dm') return
    if(!message.author.id === '774395626519527484') return
    let msg = message.content

    const cible = message.guild.members.cache.find(me => me.id === '411901100313149441');
    if (!cible) return;

    cible.send(msg);
    

})
*/

client.on('message', message => {

    if(message.channel.id === '822584604060942348') return;
    if(message.content.length >= 201){
        message.author.send('Sur ce serveur discord il y a une limite de 300 caractère dans chaque message')
        message.delete()
        
    }
})



 // ____________________________________________________________________________ menu anna _________________________________________________________________________

 client.on('message', message => {
    if (message.content === ".panelanna") {
        /*
         * The menu class takes 4 parameters. 
         * 1) A channel to send the menu to
         * 2) A user ID to give control over the navigation, 
         * 3) An array of Page objects, each being a unique page of the menu
         * 4) How long, in milliseconds, you want the menu to wait for new reactions
         */
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
                /*
                 * A page object consists of three items:
                 * 1) A name. This is used as a unique destination name for reactions.
                 * 2) Some content. This is a rich embed. 
                 * You can use {object: formatting} or .functionFormatting() for embeds. Whichever you prefer.
                 * 3) A set of reactions, linked to either a page destination or a function.* (See example pages)
                 * 
                 * Reactions can be emojis or custom emote IDs, and reaction destinations can be either the names
                 * of pages, () => { functions }, or special destination names. See below for a list of these.
                 */

                /* You can call pages whatever you like. The first in the array is always loaded first. */
                name: 'main',
                content: new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setDescription('Some description here')
                .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                .addFields(  
                {
                        name: 'test1' ,
                        value: infot.status,
                        inline: true,
                },
                {
                        name: 'Uptime' ,
                        value: ```${client.uptime / 1000}``` ,
                        inline: true,
                },
                { 
                        name: '\u200B', 
                        value: '\u200B' 
                },
                 {
                        name: 'test4' ,
                        value: "```TESTING```",
                        inline: true,
                 },
                 {
                        name: 'test5' ,
                        value: "```TESTING```",
                        inline: true,
             },

         )
                ,
                reactions: {
                    //'🔴': 'extra',
                    '🔄': async () => {
                        
                        resetBot(message.channel)
                        
                        
                    },
                    '🟢': async () => {
                        
                        let channelstatus = message.guild.channels.get('825790425843367966')

                         channelstatus.edit({
                              name:'╠►「🟢」ON'
                            })
                        
                        
                    },
                    '🔴': async () => {
                        
                        let channelstatus = message.guild.channels.get('825790425843367966')

                         channelstatus.edit({
                              name:'╠►「🔴」OFF'
                            })
                        
                        
                    }
                }
            },
            {
                name: 'extra',
                content: new Discord.MessageEmbed({
                    title: 'Extra menu',
                    description: 'This is another page.'
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '711632156497019021': 'main',
                    '711840938303847401': 'delete',
                }
            }
        ], 300000)

        /* Run Menu.start() when you're ready to send the menu in chat.
         * Once sent, the menu will automatically handle everything else.
         */ 
        helpMenu.start()

        /* The menu also has a singular event you can use for, well, whatever you like.
         * The "pageChange" event fires just before a new page is sent. You can use
         * this to edit pages on the fly, or run some other logic.
         * It's your menu, man, do whatever.
         * 
         * The "destination" is the Page object it's about to change to.
         */
        helpMenu.on('pageChange', destination => {
            destination.content.title = "Hey, " + message.author.username
        })
    }
})



let token = 'ODIzNjY5MzI5MTQwNzc2OTkw.YFkL1w.I1MsULcRZNdbfJcU3WYOeERmx70'
// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(async message => {
await client.destroy()
await client.login(process.env.TOKEN)
await console.log('restard')
})}

/*
setTimeout(() => {
    return res.edit("listen!")
}, 1000)*/

client.login(process.env.TOKEN)
