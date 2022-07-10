const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

const prefix = "?";
const quoi = "quoi";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTk1NzAwNTYzMTIxNTM3MTY1.GeEILc.g7qgKQjT0LBdhcEsNpaWYd2e_oQb0Byu8zgdS0");

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //quoi
    if(message.content === quoi){
        message.reply("feur");
    }
    //!quoi 
    if(message.content === prefix + "quoi"){
        message.reply("feur");
    }
    else if (message.content === prefix + "help"){
        message.channel.send("**je suis pas ton chien**\n tais toi")
    }
});