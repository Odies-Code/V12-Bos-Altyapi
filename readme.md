# Odies modülleri kullanılarak yapılmıştır. Modüllere güncelleme geldikçe altyapı güncellenecektir.

# Config dosyasını ayarlamanız yeterlidir
---
## // Komut taslağı //

module.exports = {
    config: {
        names: ["komut-adı-1", "komut-adı-2"], // "" Şeklinde çoğalta bilirsiniz.
        description: "Komut acıklaması",
        usage: "Komut kullanımı",
        permAuthor: "Kullanın permi": // "owner" yaparsanız sadece botun sahipleri kullanabilir || "everyone" yaparsanız herkes kullanabilir.
    },
    async run(client, message, args) {
        message.channel.send('Bu boş bir komut')
    }
}
---
## // Event taslağı //

module.exports = client => {



}
---