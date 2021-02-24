const express = require("express");
const app = express();
const Discord = require("discord.js");
const client = new Discord.Client();

//Kurulum
const config = {
logkanalid: "",//log Kanal Idsi
hatamesaji: "",//Apide Hata Olunca Kanala Gonderilecek mesaj
baslatildimesaj: "Api Baslatildi",
PORT: "6060"//6060
};
app.set('view engine', 'ejs');

app.get("/", (req,res) => {
res.render("anasayfa");
});
// Api 
app.get("/api/", (req,res) => {
res.json(`${config.baslatildimesaj} Port: ${config.PORT} `);
client.channels.get(config.logkanalid).send(`${config.baslatildimesaj}`);

});
//Rastgele Şifre
const generator = require("generate-password");
app.get("/api/sifre-olustur", (req,res) => {
var password = generator.generate({
    length: 10,//sifrenin uzunlugu
    numbers: true //rakamlardan oluşumu
   //not:true aktiv demekdir
});
let result = [];

res.json(password);

//olusturulmus sifreyi konsola gonderelim
console.log("======Sifre Olusturuldu====");
console.log(password);
console.log("=======kardespro.cf==========");
});

app.listen(config.PORT);


