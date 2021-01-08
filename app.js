const { token, prefix, sahipler } = require('./config.json'),
    Discord = require('discord.js'),
    client = new Discord.Client(), { Mongo, JSON, YAML } = require('odies.database'), { DiscordClient } = require('odies.handlers'),
    filter = require('odies.filter').Manager,
    db = new JSON('database'),
    express = require('express'),
    app = express(),
    websend = require('quick.hook')
    //Tanımlamalar Yukarı !!
let dosyaKomut = 'commands' // Komutlar Klasoru 
let dosyaEvent = 'events'
const odies = new DiscordClient(client, dosyaKomut, prefix, sahipler, { dosyaEvent });

//Komutlar Buranın Altına






//Komutlar Buranın Üstüne

odies.DiscordLoginFunction()

client.on("message", async(message) => {
    if (message.author.bot) return;
    var etiketPrefix = true
    odies.messages(message, { etiketPrefix }) // Message clientimiz
})

client.login(token)