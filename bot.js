const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = require('discord-prefix');
const ytdl = require('ytdl-core');
const prettyMilliseconds = require("pretty-ms");
require('dotenv').config()
let defaultPrefix = 'LF ';
let count = 1;



client.on("ready", () => {
    client.user.setStatus("online");

    //client.user.setActivity({game: {name: "Groowing", type: 0}});
    client.user.setActivity(`${defaultPrefix} help = commands`, { type: 'WATCHING' });


    client.user.setUsername("Stock manager");
});



function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}



client.on("message", message => {
    if (message.author.bot) return;

    let guildPrefix = prefix.getPrefix(message.guild.id); //get the prefix for the discord server

    if (!guildPrefix) guildPrefix = defaultPrefix; //set prefix to the default prefix if there isn't one


    const args = message.content.slice(guildPrefix.length).trim().split(' ');
    const cmd = args.join(" ");
    if (!message.content.startsWith(guildPrefix)) return;

    const prefix_changing_command = defaultPrefix.trim() + " " + "Prefix" + " ";
    if (message.content.startsWith(prefix_changing_command)) {
        prefix.setPrefix(message.content.slice(prefix_changing_command.length).trim(), message.guild.id);

    } else if (cmd == ("CoinFlip")) {
        message.channel.send((Math.random() > 0.5 ? "Head's" : "Tail's"));

    } else if (args.join(" ").toLowerCase() == "help") {
        message.channel.send("LF Prefix (to change prefix), CoinFlip, UptimeN ");

    } else if (cmd == ("UptimeN")) {   //Reads current uptime
        message.channel.send(`Uptime: ${prettyMilliseconds(client.uptime)}`)

    }
})



client.login(process.env.TOKEN);