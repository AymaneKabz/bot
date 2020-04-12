const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready");
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if (
    message.content.toLowerCase().includes("chkoun") ||
    message.content.toLowerCase().includes("chkon") ||
    message.content.toLowerCase().includes("chkun")
  ) {
    return message.author.username === "msprt"
      ? message.channel.send("li hwak a bent l97ba")
      : message.channel.send("li hwak a weld l97ba");
  }

  if (message.author.username === "Aymane") {
    //return message.channel.send("Slm");
  }

  if (
    message.author.username === "Silverbody" ||
    message.author.username === "Silvah"
  ) {
    return message.channel.send("Silver sir tkhdem a zbi");
  }

  if (message.content.toLowerCase().includes("bbass")) {
    return message.channel.send(
      new Discord.Attachment("https://i.imgur.com/4A2evzc.jpg")
    );
  }
  if (message.content.toLowerCase().includes("bbboobs")) {
    return message.channel.send(
      new Discord.Attachment("https://i.imgur.com/ec1zIvV.jpg")
    );
  }

  if (message.content.toLowerCase().includes("bbsbntr")) {
    let rnd = Math.floor(Math.random() * 12);
    const sbntr = [
      new Discord.Attachment("https://i.imgur.com/fRcIK9A.jpg"),
      new Discord.Attachment("https://i.imgur.com/R46yza8.png"),
      new Discord.Attachment("https://i.imgur.com/3wMa76O.jpg"),
      new Discord.Attachment("https://i.imgur.com/APUX6o8.jpg"),
      new Discord.Attachment("https://i.imgur.com/lJZKyKx.jpg"),
      new Discord.Attachment("https://i.imgur.com/z8lRM4E.png"),
      new Discord.Attachment("https://i.imgur.com/2I5Xv2X.png"),
      new Discord.Attachment("https://i.imgur.com/g8zm8TO.jpg"),
      new Discord.Attachment("https://i.imgur.com/Mkyrwgr.jpg"),
      new Discord.Attachment("https://i.imgur.com/cHuzeW3.jpg"),
      new Discord.Attachment("https://i.imgur.com/2co5Cmo.jpg"),
    ];

    return message.channel.send(sbntr[rnd]);
  }

  //return message.channel.send("Swloni chkon ana");
});

client.login("Njc4Njk4NzI5ODU4OTI0NTU1.Xkmliw.P4cWm8pW0nThOHvuyytNXeobgqM");
