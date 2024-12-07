module.exports = {
  name: "sunucu",
  code: `
    $title[Sunucu Bilgileri]
    $thumbnail[$serverIcon]
    $addField[Sunucu Davet Linki;**🏹 $getServerInvite**]
    $addField[Sunucu Boost Seviyesi;**$customemoji[emoji_12] $serverBoostLevel**]
    $addField[Sunucu Boost Sayısı;**$customemoji[1111383167388098632] $serverBoostCount**]
    $addField[Rol Sayısı;**🔗 $roleCount**]
    $addField[Kanal Sayısı;**⛓️ $channelCount**]
    $addField[Üye Sayısı;**🎗️ $membersCount**]
    $addField[Sunucu Sahibi;**👑 <@$ownerID>**]
    $addField[Oluşturulma Tarihi;**📅 $creationDate[$guildID]**]
    $addField[Sunucu İsmi;**🥏 $serverName**]
    $color[RED]
  `
}
