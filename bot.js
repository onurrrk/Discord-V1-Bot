const morty = require("aoi.js");
const ayarlar = require('./ayarlar.json');
const fs = require("fs");
const bot = new morty.Bot({
  token: ayarlar.token,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates", "GuildVoiceDiscovery", "GuildVoiceStates"],
  events: ["onMessage", "onVoiceStateUpdate", "onInteractionCreate", "onJoin", "onLeave", "onMessageDelete", "onMessageUpdate", "onBanAdd", "onBanRemove", "onGuildJoin", "onFunctionError"],
});

bot.onBanAdd();
bot.onBanRemove();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onInviteCreate();
bot.onInviteDelete();
bot.onMemberUpdate();
bot.onRoleDelete();
bot.onRoleUpdate();
bot.onRoleCreate();
bot.onUserUpdate();
bot.onEmojiCreate();
bot.onEmojiDelete();
bot.onJoined();
bot.onInteractionCreate()
bot.onLeave();
bot.onMessageDelete();
bot.onMessageUpdate()
bot.onMessageDeleteBulk();
bot.onMessage();
bot.onGuildJoin();
bot.onVoiceStateUpdate();
bot.loadCommands(`./komutlar/`);


//////////////////////////////////////////////////////////////////////////////////////////

bot.status({
  text: `WONDER`,
  type: "WATCHING",
  status: "dnd",
  time: 5,
});


bot.variables({
  startTime: "",
  totalTime: "",
  sure: "",
  raidengel: "",
  otorolkanal: "",
  otorol: "",
  uyarı: "0",
  önerik: "",
});

bot.variables({
  otocevap: "",
  otocevapw: "0",
});

bot.variables({
  tlog: "no",
  hex: "",
});

bot.variables({
  rick: "morty",
  tavsiyelog: "",
  ended: "false",
  vrol: "",
  arol: "",
  kkanal: "",
  tick: "",
  girişçıkış: "",
});

bot.readyCommand({
  channel: "1248988249007984781",
  code:`
$customEmoji[Yeil] **Meyaba Ben Geldimmmmm**
 Ping: $ping | Ram: $ram Mb
       ----------------------
`
})

/////////////////////////////////////////////////////////////////////

//Üye log
bot.joinCommand({
  channel: "$getServerVar[girişçıkış]",
  code: `
 $author[$userTag;$authorAvatar]
 $description[
 📥 <@$authorID> Sunucuya katıldı.
$customEmoji[discordlink] ID'si: $authorID
$customEmoji[emoji_31] İsmi: $username
$customEmoji[dnya] Kişi Sayısı: $membersCount]
 $footer[$username;$authorAvatar]
 $addTimestamp
 $thumbnail[$authorAvatar]
 $color[GREEN]
 `,
});

bot.leaveCommand({
  channel: "$getServerVar[girişçıkış]",
  code: `
  $author[$userTag;$authorAvatar]
  $description[
  📤 <@$authorID> Sunucudan ayrıldı.
$customEmoji[discordlink] ID'si: $authorID
$customEmoji[emoji_31] İsmi: $userName
$customemoji[dnya] Kişi Sayısı: $membersCount]
  $footer[$username;$authorAvatar]
  $addTimestamp
  $thumbnail[$authorAvatar]
  $color[RED]
  `,
});

bot.command({
  name: "girişçıkış-aç",
  code: `
  $setServerVar[girişçıkış;$mentionedChannels[1]]
$title[Giriş-Çıkış]
$description[Giriş-Çıkış kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı]
$color[GREEN]
  $onlyPerms[admin;Bu Komut İçin Yönetici Yetkiniz Olmalıdır!]
  $onlyIf[$mentionedChannels[1]!=;Kullanım $getServerVar[prefix]girişçıkış-aç #kanal]
  `,
});

bot.command({
  name: "girişçıkış-kapat",
  code: `
  $resetServerVar[girişçıkış]
$title[Giriş-Çıkış]
$description[Giriş-Çıkış kanalı başarıyla sıfırlandı]
$color[GREEN]
  $onlyPerms[admin;Bu Komut İçin Yönetici Yetkiniz Olmalıdır!]
  `,
});


///////  M  O  D  L  O  G  ///////////////////

bot.roleDeleteCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[Bir Rol Silindi]
        $description[Silinen Rol: **$oldRole[name]**
Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
    $color[RED]`,
});

bot.roleCreateCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[Bir Rol Oluşturuldu]
        $description[Oluşturulan Rol;
        \`\`$newRole[name]\`\`
        **Bilgileri**
        ID: $roleID[$newRole[name]]
        $replaceText[$replaceText[$isMentionable[$roleID[$newRole[name]]];true;Etiketlenebilir;-1];false;Etiketlenemez;-1]

Rol rollerin sıralamasında $rolePosition[$roleID[$newRole[name]]]. Sırada...
**$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
    $color[GREEN]`,
});

bot.roleUpdateCommand({
  channel: "$getServerVar[modlog]",
  code: `
  $title[Bir Rol Güncellendi]
 $description[
Eski Adı: **$oldRole[name]**
Yeni Adı: **$newRole[name]**

**Bilgileri**
      ID: $roleID[$newRole[name]]
      $replaceText[$replaceText[$isMentionable[$roleID[$newRole[name]]];true;Etiketlenebilir;-1];false;Etiketlenemez;-1]     
      Rol Yetkileri;
 \`\`\`
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$rolePerms[$roleID[$newRole[name]];|];Administrator;Yönetici;-1];Manage Guild;Sunucuyu Yönet;-1];Kick Members;Üyeleri At;-1];Create Instant Invite;Davet Oluştur;-1];Ban Members;Üyeleri Yasakla;-1];Manage Channels;Kanalları Yönet;-1];Add Reactions;Tepki Ekle;-1];View Audit Log;Denetim Kaydını Görüntüle;-1];View Channel;Kanalları Görüntüle;-1];Send Messages;Mesaj Gönder;-1];Manage Messages;Mesajları Yönet;-1];Embed Links;Gömülü Bağlantı Yerleştir;-1];Attach Files;Dosya Ekle;-1];Read Message History;Mesaj Geçmişini Görüntüle;-1];Mention Everyone;Herkesten Bahset;-1];View Guild Insights;Sunucu İstatistiklerini Görüntüle;-1];Connect;Bağlan;-1];Speak;Konuş;-1];Mute Members;Üyeleri Sustur;-1];Deafen Members;Üyeleri Sağırlaştır;-1];Move Members;Üyeleri Taşı;-1];Manage Nicknames;Kullanıcı Adlarını Yönet;-1];Manage Roles;Rolleri Yönet;-1];Manage Webhooks;Webhook'ları Yönet;-1];Manage Emojis;Emojileri Yönet;-1]
 \`\`\`
Rol rollerin sıralamasında $rolePosition[$roleID[$newRole[name]]]. Sırada...
Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
$color[GREEN]
  `,
});

bot.channelCreateCommand({
  channel: "",
  code: `$useChannel[$getservervar[modlog]]
  $title[Bir kanal oluşturuldu]
        $description[Oluşturulan kanal: **$newChannel[name]**
        Bilgileri
        ID: **$channelID[$newChannel[name]]**
        Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
    $color[GREEN]
    $suppresserrors`,
});

bot.channelDeleteCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[Bir Kanal silindi]
        $description[Silinen Kanal: **$oldChannel[name]**
        
Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
    $color[RED]`,
});

bot.channelUpdateCommand({
  channel: "$getServerVar[modlog]",
  code: `$title[Bir Kanal Güncellendi]
        $description[Kanalın Eski Adı: **$oldChannel[name]**
Kanalın Yeni Adı: **$newChannel[name]**

Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]
    $color[ORANGE]`,
});

bot.updateCommand({
  channel: "$getServerVar[modlog]",
  code: `
        $author[$username[$authorID] Mesaj Düzenledi !;$authorAvatar]
$thumbnail[$serverIcon]
$description[
Eski Mesaj : 
\`\`\`
$oldMessage\`\`\`
Düzenlenen Mesaj : 
\`\`\`
$message\`\`\`
Mesajın Düzenlendiği Kanal : <#$channelUsed>

Düzenleyen kişi: <@$authorId>
Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
$color[YELLOW]
 $onlyIf[$isBot[$authorID]!=true;]`,
});

bot.deletedCommand({
  channel: "$getServerVar[modlog]",
  code: `
$author[$username[$authorID] Mesaj Sildi!;$authorAvatar]
$description[$thumbnail[$serverIcon]
Silinen Mesaj : 
\`\`\`
$message\`\`\`
Mesajın Silindiği Kanal : <#$channelUsed>

Silen Kişi: <@$authorID>
Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
$color[RED]
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors[]
`,
});

bot.command({
  name: "modlog-aç",
  code: `
  $setServerVar[modlog;$mentionedChannels[1]]
$title[MODLOG AYARLANDI]
$description[Modlog kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı]
$color[GREEN]
  $onlyPerms[admin;Bu Komut İçin Yönetici Yetkiniz Olmalıdır!]
  $onlyIf[$mentionedChannels[1]!=;Kullanım $getServerVar[prefix]modlog-aç #kanal]
  `,
});

bot.command({
  name: "modlog-kapat",
  code: `
  $resetServerVar[modlog]
$title[MODLOG KAPATILDI]
$description[Modlog kanalı başarıyla sıfırlandı]
$color[GREEN]
  $onlyPerms[admin;Bu Komut İçin Yönetici Yetkiniz Olmalıdır!]
  `,
});

//Emoji log
bot.emojiCreateCommand({
  channel: "$getServerVar[modlog]",
  code: `
  $author[$newEmoji[name];$newEmoji[url]]
  $description[$newEmoji[emoji] Emojisi eklendi.
  
Emoji adı: **$newEmoji[name]**

Emoji linki: **[Tıkla]($newEmoji[url])**
Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
  $footer[ID: $newEmoji[id] $addTimestamp]
  $thumbnail[$newEmoji[url]]
  $color[GREEN]
  `,
});

bot.emojiDeleteCommand({
  channel: "$getServerVar[modlog]",
  code: `
  $author[$oldEmoji[name];$oldEmoji[url]]
  $description[**$oldEmoji[name]** Adlı emoji silindi.

Emoji linki: **[Tıkla]($oldEmoji[url])**
Tarih: **$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];day;Gün;-1];August;Ağustos;-1];september;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year $hour:$minute**
$timezone[Turkey]]
  $footer[$serverName $addTimestamp]
  $thumbnail[$oldEmoji[url]]
  $color[RED]
  `,
});


/////////////////// O T O  C E V A P ///////////////////////

bot.command({
  name: "otocevap",
  code: `
$if[$message[1]==aç]
$channelsendMessage[$channelid;Başarıyla \`\`$splitText[1]\`\` otocevap komudu olarak ayarlandı!Artık herhangi bir kullanıcı \`\`$splittext[1]\`\` yazınca \`\`$splittext[2]\`\` olarak karşılık vereceğim!;no]
$textSplit[$messageSlice[1];|]
$setservervar[otocevap;$getobjectproperty[kurulum] |$splitText[1]|$splitText[2]|]
$addObjectProperty[kurulum;$getServerVar[otocevap]]
$createObject[{}]
$textSplit[$messageSlice[1];|]
$setservervar[otocevapw;0]
$onlyIf[$charCount[$messageSlice[1]]<201;❌ Otocevap komut/cevap karakter limiti en fazla 200 olabilir.]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;❌ Doğru kullanım -> \`\`otocevap aç/kapat komut|komut kullanıldığında verilecek cevap\`\`]
$onlyIf[$charCount[$getservervar[otocevap]]<750;❌ Otocevap sınırını doldurmuşsun.]
$elseIf[$message[1]==kapat]
$channelsendMessage[$channelid;**$messageSlice[1]** otocevabı başarıyla kaldırıldı!;no]
$setservervar[otocevapw;0]
$setServerVar[otocevap;$replaceText[$getservervar[otocevap];$getobjectproperty[alım];;-1]]
$addObjectProperty[alım;|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];0]]|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];1]]|]
$createObject[{}]
$onlyIf[$checkContains[$joinSplitText[];$messageSlice[1]]==true;❌ \`\`$messageslice[1]\`\` adlı bir otocevap komudu bulamadım.]
$textSplit[$getservervar[otocevap];|]
$setservervar[otocevapw;1]
$endelseIf
$endif
$setservervar[otocevapw;1]
$onlyIf[$checkContains[$message[1];aç;kapat]==true;❌ Kullanılabilir ayarlar \`\`aç\`\` ve \`\`kapat\`\`tır.]
$onlyPerms[manageserver;❌ Bu komudu kullanabilmek için **Sunuyu Yönet** yetkisine sahip olmalısın.]`,
});

bot.command({
  name: "$alwaysExecute",
  code: `
$splitText[$sum[$findTextSplitIndex[$message];1]]
$onlyIf[$findTextSplitIndex[$message]!=0;]
$textSplit[$getservervar[otocevap];|]
$onlyIf[$getservervar[otocevap]!=;]
$onlyIf[$getservervar[otocevapw]!=1;]
`,
  nonPrefixed: true,
});

bot.command({
  name: "otocevap-listesi",
  alises: [
    "otocevaplar",
    "otocevaplistesi",
    "otocevaplist",
    "otocevap listesi",
  ],
  code: `$description[
Otocevap Listesi
-----------------------------
$joinSplitText[
]
-----------------------------]
$color[GREEN]
$footer[$serverName Otocevap Listesi;$serverIcon[$guildID]]
$thumbnail[$serverIcon[$guildID]]
$author[$username;$authorAvatar]
$textSplit[$getservervar[otocevap];|]`,
});


///////////////////////////  O  T  O  R  O  L  ////////////

bot.command({
  name: "otorol",
  code: `
  $color[GREEN]
  $title[BAŞARILI!]
  $description[
  Otorol Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı]
  
  $setServerVar[otorol;$mentionedRoles[1]] 
  $onlyif[$rolePosition[$mentionedRoles[1]]>$rolePosition[$highestRole[$clientID]];Bu rol botun rolünden daha yukarıda. Lütfen botun rolünü ayarlayacağız rolün üstüne çıkarın.]
  $onlyPerms[admin;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  $onlyIf[$findrole[1]!=;Kullanım \`\`!otorol @rol\`\`]
  `,
});

bot.command({
  name: "otorol-kapat",
  code: `
  $color[GREEN]
  $title[BAŞARILI!]
  $description[
  Otorol Başarıyla Sıfırlandı]
  $resetServerVar[otorol]
  $onlyPerms[admin;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  `,
});

bot.joinCommand({
  channel: "otorolkanal",
  code: `
    $if[$getServerVar[otorol]!=]
        $giveRoles[$authorID;$getServerVar[otorol]]
    $endif
  `,
});
