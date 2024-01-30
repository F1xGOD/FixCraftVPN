// 

/* GAMES TO ADD



*/

var games = [
    {
      'id': '1v1lol',
      'title': '1v1 LOL',
      'url': 'https://fixcraft-vpn.onrender.com/games/1v1lol',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmIR3UAk-GxQstNZDnfG_IarTEfQAfQ4Sstz1efNEOcvvMc4IE91QzqPlr4QRD0V4zqo:https://yt3.googleusercontent.com/nqd64OgJUuxi0_uTUUeyq7y0-2mtewFKodyBR-BzlKQsupSHIkkHcs-BTAwS_4Ew9A_G4Ih1%3Ds900-c-k-c0x00ffffff-no-rj&usqp=CAU'
    },
    {
      'id': 'minecraft',
      'title': 'Minecraft',
      'url': 'https://fixcraft-vpn.onrender.com/mc',
      'image': 'https://static-00.iconduck.com/assets.00/minecraft-icon-2048x2048-3ifq7gy7.png'
    },
    {
      'id': 'drivemad',
      'title': 'Drive Mad',
      'url': 'https://fixcraft-vpn.onrender.com/games/drivemad',
      'image': 'https://play-lh.googleusercontent.com/V_egAxch0phxs10H_Z1QpWRrsH4phd8egT_5ZjYlFbXzXvwpUGpmJMn2h6HgbGkSlZSM=w240-h480-rw'
    },
    {
      'id': 'backrooms',
      'title': 'Backrooms',
      'url': 'https://fixcraft-vpn.onrender.com/games/backrooms',
      'image': 'https://play-lh.googleusercontent.com/iBBy7mU2acyOA32No0LcXbhALC8blVX2IRP4LQnkET3GOv8rdK0uLhkbNG8a-9B3wg'
    },
    {
      'id': 'discord',
      'title': 'Discord',
      'url': 'https://fixcraft-vpn.onrender.com/games/discord',
      'image': 'https://x0.at/foTx.png'
    },
    {
      'id': 'pixelgunsurvival',
      'title': 'Pixel Gun Survival',
      'url': 'https://fixcraft-vpn.onrender.com/games/pixelgunsurvival',
      'image': 'https://scylla.wgplayer.com/f_webp/https://static.gogy.com/assets/games/imgs/thumbs/Pixel-Gun-Apocalypse-3.jpg'
    },
    {
      'id': 'subwaysurfers',
      'title': 'Subway Surfers',
      'url': 'https://fixcraft-vpn.onrender.com/games/subwaysurfers',
      'image': 'https://img.tapimg.net/market/images/996c9a9dd4b2876b36b447a09181d0fa.png/appicon'
    },
    {
      'id': 'dogeminer',
      'title': 'Dodge Miner',
      'url': 'https://fixcraft-vpn.onrender.com/games/dodgecoinminer',
      'image': 'https://play-lh.googleusercontent.com/r1Bu5QEtyXverGtzRRlQdzFgSXjJdFxQJFb4V3gqehlE_j24_YD--7fUFF1jTa_de1s'
    },
    {
      'id': 'basketballstars',
      'title': 'Basketball Stars',
      'url': 'https://fixcraft-vpn.onrender.com/games/basketballstars',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Y8VtIClOt2T9-K5SfF27D8b8gCfBafN4XO_SJkD2MQ&s'
    },
    {
      'id': 'bitlife',
      'title': 'BitLife',
      'url': 'https://fixcraft-vpn.onrender.com/games/bitlife',
      'image': 'https://x0.at/XxRi.jpeg'
    },
    {
      'id': 'motox3m',
      'title': 'Moto X3M',
      'url': 'https://fixcraft-vpn.onrender.com/games/moto-x3m',
      'image': 'https://is1-ssl.mzstatic.com/image/thumb/Purple1/v4/b8/74/9f/b8749f28-9ff1-2fc2-b7f2-9428abd40fda/mzl.jiqtfguw.png/512x512bb.jpg'
    },
    {
      'id': 'fridaynightfunkin',
      'title': 'Friday Night Funkin',
      'url': 'https://fixcraft-vpn.onrender.com/games/fridaynightfunkin',
      'image': 'https://x0.at/6Lkr.png'
    },
    {
      'id': 'bobtherobber2',
      'title': 'Bob The Robber 2',
      'url': 'https://fixcraft-vpn.onrender.com/games/bobtherobber2',
      'image': 'https://x0.at/zuMb.webp'
    },
  ]
  
  var customgames = JSON.parse(localStorage.getItem("customgames"))
  customgames.forEach(game => {
    games.push(game)
  })
  
  console.log("Loaded " + games.length + " games")
  console.log("Loaded " + customgames.lenfth + " custom games")
