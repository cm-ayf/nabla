require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.on('ready', () => {
    console.log(`${client.user.tag} logged in`)
});

client.login(TOKEN)