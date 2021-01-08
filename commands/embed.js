const
    Discord = require('discord.js'),
    websend = require('quick.hook')

module.exports = {
    config: {
        names: ["embed", "yazdır"], // "" Şeklinde çoğalta bilirsiniz.
        description: "Yazdığınız şeyleri yazdırır",
        usage: "prefix+yazdır mesaj",
        permAuthor: "everyone" // "owner" yaparsanız sadece botun sahipleri kullanabilir || "everyone" yaparsanız herkes kullanabilir.
    },
    async run(client, message, args) {
        var mesaj = args.slice(0).join(" ")

        var embed = new Discord.MessageEmbed()
        .setDescription(`**${mesaj}**`)

        websend(message.channel,embed,{
            name:"Odies Code",
            icon:"https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/takeoff-512.png"
        })


    }
}