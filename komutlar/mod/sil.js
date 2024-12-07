module.exports = {
  name: "sil",
  code:`
  \`\`$message\`\` mesaj silindi.
  $deleteIn[4s]
  $clear[$sum[$message[1];1]]
  $suppressErrors[Hata!]
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;Üzgünüm Bu Komut İçin \`\`Mesajları Yönet\`\` Yetkin Bulunmalıdır.]
  $onlyIf[$message!=;Mesaj Miktarı Girmelisin!]
  $onlyIf[$isNumber[$message[1]]!=false;Girdiğin Miktar Sayı Değil!]
  $onlyIf[$message[1]>0;Girdiğin Rakam 1'in Altında Olamaz!]
  $onlyIf[$message[1]<301;Girdiğin Rakam 300'ün Üstünde Olamaz!]
`
}