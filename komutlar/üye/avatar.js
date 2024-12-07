module.exports = {
  name:"avatar",
  aliases:["av","pp"], 
  code:`
  $author[$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]
  $description[[[**Avatar Linki**]$replaceText[($userAvatar[$mentioned[1;yes]]);webp;png]]]
  $image[$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]]
  $color[RANDOM]
  $footer[Sorgulayan: $username;$authorAvatar]

  `
}