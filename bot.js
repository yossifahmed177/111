const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*"



//bc

client.on("message", message => {
    if (message.content.startsWith("*bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "*";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "obc")) {
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });






client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("*avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });





  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*adminbc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



  
  client.on('message', msg => {
    if(msg.content === '*help')
    msg.reply('Check Your DM :white_check_mark:')
  });
  

  client.on("message", message => {
    if (message.content === "*help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       *bc | لأرسال برود كاست للكل
           ─══════════════─
       *obc  |  لأرسال برود كاست للأونلاين
           ─══════════════─
	   *nbc |  بدون منشن للشخص
	       ─══════════════─
	   *bot | معلومات عن بوت 
	       ─══════════════─
	   *avatar | هذا الامر يعطك صورت لي تبي تمنشنو او صورتك 
	       ─══════════════─
** `)
   message.author.sendEmbed(embed)
   
   }
   });



   const adminprefix = "*";
const devs = ['499982945088569344','408396389291393025'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغير الاسم `)
return message.reply("**لا يمكنك انك تغير اسم لمدة ساعة . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير الصورة `);
      } 
});


   client.on('message', message => {
    if (message.content.startsWith("*bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Broadcast Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``المتواجدين``' , `[ ${client.channels.size} ]` , true)
            .addField('``الاعضاء``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``امر البوت``' , `[*]` , true)
                  .addField('``لغه البرمجه``' , `[ Java Script ]` , true)
                    })
}
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("*Sky Light !!",{type: 'WATCHING'});
  
  });

client.login('NTEyNzgwNDU0NjQyOTc0NzI3.Ds-b8A.fHrp1KrNatRIsq_SWneQFHwyeHQ');
