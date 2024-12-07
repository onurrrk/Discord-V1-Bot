module.exports = {
  name: "yaz",
  code: `
  $channelSendMessage[$mentionedChannels[1];$messageSlice[1]]
  $onlyIf[$messageSlice[1]!=;$customemoji[uyar] Bir mesaj belirtmelisiniz!]
  $onlyIf[$mentionedChannels[1]!=;!yaz <#kanal> <mesaj>.]
  $onlyPerms[admin;{color:RED}{description:$customEmoji[uyar] Bu komutu kullanmak için yeterli izniniz yok!}]
  `
} 
