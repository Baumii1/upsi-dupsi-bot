console.log("Loading Bot...")

const Discord = require("discord.js")
const fs = require("fs")
const { URL } = require("url")
const Canvas = require('canvas')
const { MessageAttachment } = require('discord.js')

const client = new Discord.Client()


client.login(process.env.TOKEN);


client.on("ready", () => {
    console.log("Bot logged in as " + client.user.tag + "!")
    console.log("The Bot " + client.user.tag + " is currently used on " + client.guilds.cache.size + " servers!")
});

client.on("message", async (msg) => {
    if(!msg.member.user.bot && msg.guild) {
        if(msg.content == "!test") {
            console.log( 'ahh')
            const welcomeChannel = client.channels.cache.find(channel => channel.id === '817332946042093579');
            if(msg.guild.id != '817332945453842443') return;
            const canvas = Canvas.createCanvas(600, 250);
            const context = canvas.getContext('2d');

            const background = await Canvas.loadImage('./background5.png');

            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            const avatar = await Canvas.loadImage(msg.member.user.displayAvatarURL({ format: 'jpg' }));

            context.strokeRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();
	        
	        context.drawImage(avatar, 50, 50, 150, 150);

            context.font = '60px sans-serif';

            // Select the style that will be used to fill the text in
            context.fillStyle = '#ffffff';

            // Actually fill the text with a solid color
            context.fillText(msg.member.nickname, 225, 125);

            const attachment = new MessageAttachment(canvas.toBuffer(), msg.member.user.avatarURL())

            /*const channel = client.channels.cache.find(channel => channel.id === welcomeChannel)
            channel.send({ files: [attachment] });*/
            msg.channel.send({ files: [attachment] })
        } else if(msg.content == "!test2") {
            msg.channel.send("2. Test")
            console.log(msg.member.user.tag + " executed command !test2!")
        } else if(msg.content.startsWith("!avatar")) {
            if(msg.mentions.users.first()) {
                var user = msg.mentions.users.first()
                var attachment = new Discord.MessageAttachment(user.avatarURL())
                msg.reply(attachment)
            } else {
                var attachment = new Discord.MessageAttachment(msg.member.user.avatarURL())
                msg.reply(attachment)
            }
            console.log(msg.member.user.tag + " executed command !avatar")
        } else if(msg.content == "!Upsi Dupsi") {
            var embed = new Discord.MessageEmbed()
            .setColor("#f58742")
            .setTitle("Upsi Dupsi")
            .setURL("https://upsidupsiesports.wordpress.com")
            .setAuthor("Baumii" , "https://cdn.discordapp.com/attachments/822099931333656627/824334270377754664/39cf95d8335f4646ea4cdfce09f2bc5c.webp" , "https://upsidupsi-esports.de")
            .setDescription("Upsi Dupsi ist ein profesionelles CS:GO ESports Team, dass das Spiel immer sehr ernst nimmt. Die sind auch sehr gut!")
            .addField("Owner : germ4npl4yer", "Der kann immer snipen, mit dem Rest manchmal einfach kompletter Vollidiot. Außerdem hat der fucking ADHS und ist schlagersüchtig")
            .addField("Owner : Baumii", "Der trifft sowieso nichts")
            .addField("Captain : Skittles (aka Skilliyes)", "Manchmal hittet der anders, meistens hat der aber Probleme mit seinem Parkinson zu treffen")
            .addField("Captain : HardBakedPotato", "Der macht sowieso sein Leben lang die only Headshot Challenge, deswegen ist der so krass")
            .addField("Lappen : JeffHardy", "Der ist mit seinen 35 CS Spielstunden nicht nur im Spiel lost, sondern auch in seinem Leben")
            .setTimestamp()
            .setFooter("Upsi Dupsi")
            let sentMessage = await msg.channel.send(embed)

            sentMessage.react("🟢");


        /*/} else if(msg.content.startsWith("!p")) {
            if(msg.content.startsWith("!p ")) {
                if(msg.content.startsWith("!p https://www.youtube.com/" || "!p www.youtube.com/")) {
                    msg.channel.send("link funktioniert")
                } else if(msg.content.length >= 3) {
                    msg.channel.send("query funktioniert")
                } else {
                    var embed = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle("Invalid usage")
                    .setDescription("!p [link/query]")
                    msg.channel.send(embed)
                    console.log(msg.member.user.tag + " executed command !p!")
                }
            } else if(msg.content == "!p") {
                var embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Invalid usage")
                .setDescription("!p [link/query]")
                msg.channel.send(embed)
            }/*/
        }
    }
});


client.on("guildMemberAdd", async member => {
    if(member.guild.id == "817332945453842443") {
        const welcomeChannel = client.channels.cache.find(channel => channel.id === '817332946042093579');
            const canvas = Canvas.createCanvas(600, 250);
            const context = canvas.getContext('2d');

            const background = await Canvas.loadImage('./background5.png');

            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));

            context.strokeRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();
	        
	        context.drawImage(avatar, 50, 50, 150, 150);

            context.font = '60px sans-serif';

            // Select the style that will be used to fill the text in
            context.fillStyle = '#ffffff';

            // Actually fill the text with a solid color
            context.fillText(member.nickname, 225, 125);

            const attachment = new MessageAttachment(canvas.toBuffer(), member.user.avatarURL())

            /*const channel = client.channels.cache.find(channel => channel.id === welcomeChannel)
            channel.send({ files: [attachment] });*/
            welcomeChannel.send({ files: [attachment] })
    } else if(member.guild.id == "758315654809518120") {
        const welcomeChannel = client.channels.cache.find(channel => channel.id === '955558251116756993');
            const canvas = Canvas.createCanvas(600, 250);
            const context = canvas.getContext('2d');

            const background = await Canvas.loadImage('./background5.png');

            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));

            context.strokeRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();
	        
	        context.drawImage(avatar, 50, 50, 150, 150);

            context.font = '60px sans-serif';

            // Select the style that will be used to fill the text in
            context.fillStyle = '#ffffff';

            // Actually fill the text with a solid color
            context.fillText(member.nickname, 225, 125);

            const attachment = new MessageAttachment(canvas.toBuffer(), member.user.avatarURL())

            /*const channel = client.channels.cache.find(channel => channel.id === welcomeChannel)
            channel.send({ files: [attachment] });*/
            welcomeChannel.send({ files: [attachment] })
    } else if(member.guild.id == "815692413334323276") {
        const welcomeChannel = client.channels.cache.find(channel => channel.id === '979803704515502092');
            const canvas = Canvas.createCanvas(600, 250);
            const context = canvas.getContext('2d');

            const background = await Canvas.loadImage('./background5.png');

            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));

            context.strokeRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();
	        
	        context.drawImage(avatar, 50, 50, 150, 150);

            context.font = '60px sans-serif';

            // Select the style that will be used to fill the text in
            context.fillStyle = '#ffffff';

            // Actually fill the text with a solid color
            context.fillText(member.nickname, 225, 125);

            const attachment = new MessageAttachment(canvas.toBuffer(), member.user.avatarURL())

            /*const channel = client.channels.cache.find(channel => channel.id === welcomeChannel)
            channel.send({ files: [attachment] });*/
            welcomeChannel.send({ files: [attachment] })
    }
    console.log('a');
    /*const welcomeChannel = client.channels.cache.find(channel => channel.id === '817332946042093579');
    if(member.guild.id != '817332945453842443') return;
    const canvas = Canvas.createCanvas(700, 250);
    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage('./background.png');

    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    const attachment = new MessageAttachment(canvas.toBuffer(), member.user.avatarURL())

    const channel1 = client.channels.cache.find(channel => channel.id === checkchannel)
    channel1.send({ files: [attachment] });*/
 });