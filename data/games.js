// 

/* GAMES TO ADD



*/

var games = [
    {
      'id': '1v1lol',
      'title': '1v1 LOL',
      'url': 'https://fixcraftvpn.onrender.com/games/1v1lol',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmIR3UAk-GxQstNZDnfG_IarTEfQAfQ4Sstz1efNEOcvvMc4IE91QzqPlr4QRD0V4zqo:https://yt3.googleusercontent.com/nqd64OgJUuxi0_uTUUeyq7y0-2mtewFKodyBR-BzlKQsupSHIkkHcs-BTAwS_4Ew9A_G4Ih1%3Ds900-c-k-c0x00ffffff-no-rj&usqp=CAU'
    },
    {
      'id': 'minecraft',
      'title': 'Minecraft',
      'url': 'https://fixcraftvpn.onrender.com/mc',
      'image': 'https://static-00.iconduck.com/assets.00/minecraft-icon-2048x2048-3ifq7gy7.png'
    },
    {
      'id': 'drivemad',
      'title': 'Drive Mad',
      'url': 'https://fixcraftvpn.onrender.com/games/drivemad',
      'image': 'https://play-lh.googleusercontent.com/V_egAxch0phxs10H_Z1QpWRrsH4phd8egT_5ZjYlFbXzXvwpUGpmJMn2h6HgbGkSlZSM=w240-h480-rw'
    },
    {
      'id': 'backrooms',
      'title': 'Backrooms',
      'url': 'https://fixcraftvpn.onrender.com/games/backrooms',
      'image': 'https://play-lh.googleusercontent.com/iBBy7mU2acyOA32No0LcXbhALC8blVX2IRP4LQnkET3GOv8rdK0uLhkbNG8a-9B3wg'
    },
  ]
  
  var customgames = JSON.parse(localStorage.getItem("customgames"))
  customgames.forEach(game => {
    games.push(game)
  })
  
  console.log("Loaded " + games.length + " games")
  console.log("Loaded " + customgames.lenfth + " custom games")
