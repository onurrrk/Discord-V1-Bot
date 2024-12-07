module.exports = {
  name: "bot",
  code: `
    $description[
    $author[Bot Bilgileri;$servericon]
$addField[Modüller;**Node.js:** $nodeVersion
**Aoi.js:** v$packageVersion
$addField[Bot Bilgileri;**Botun İsmi:** $username[$clientID]
**Bot ID:** $clientID
**Botun Prefixi:** $getServerVar[prefix]
**Botun Durumu:** $replaceText[$replaceText[$replaceText[$status;online;Çevrimiçi;-1];idle;Boşta;-1];dnd;Rahatsız Etmeyin;-1]
**Bot Sahibi:** [onur1692](https://discord.com/users/629700365725466634)]
$addField[Bot Kullanımları;**Botun Bellek Kullanımı:** $round[$ram] Mb
**Botun İşlemci Kullanımı:** %$cpu
$addField[Genel Bilgiler; **Sunucu Sayısı:** $serverCount
**Kullanıcı Sayısı:** $allMembersCount]
$addField[Çalışma Süresi;**Uptime:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;s; Saniye;-1];m; Dakika;-1];h; Saat;-1];d; Gün;-1];mn; Ay;-1]
$addField[Gecikme Süreleri;**Bot Gecikmesi:** $botpingms
**Mesaj Gecikmesi:** $pingms]
$color[GREEN]
  `
}
