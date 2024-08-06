import mime from 'mime'
import { readFileSync } from 'fs';
import { get } from 'http';



var defaults = {
  indexfile: true,
  '404': null,
  '403': null,
  'index': null
}

export function Serve(path, config, cors) {
  var config = Object.assign(defaults, config)
  return function(req, res, cors) {
    const hwidban = JSON.parse(readFileSync('./ban.json'));
    var type = mime.getType(req.url.split('?')[0].split('#')[0])||'text/html'
    if (req) {
      var ipAddress = req.socket.remoteAddress;
      ipAddress=ipAddress.replace("::ffff:","")
      console.log(ipAddress+" IS CONNECTING...")
      for(var oio = 0; oio<hwidban.length; oio++){
        if(hwidban[oio]!="NONE"&&hwidban[oio].ip!=undefined){
        if(hwidban[oio].ip==ipAddress&&hwidban[oio].type=="soft"){
          console.log(ipAddress+" SHOWING BAN PAGE, BAN")
          return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./ban.html"))
        }else if(hwidban[oio].ip==ipAddress&&hwidban[oio].type=="hard"){
          console.log(ipAddress+" NOT FOUND, BAN")
          return res.end('Not Found')
        }else if(hwidban[oio].ip==ipAddress&&hwidban[oio].type=="ultimate"){
          console.log(ipAddress+" REFUSED TO CONNECT, BAN")
          return res.writeHead(403).end()
        }}
      }
      var url = path+req.url.split('?')[0].split('#')[0]
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {url+='index.html'}
      try {readFileSync(url)} catch {try {readFileSync(url+=".html")} catch { return res.end('Not Found') }}
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {if (config.index) return config.index(req, res, readFileSync(url), type)}
      console.log(ipAddress+" GRANTED VIEW ACCESS!")
      return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync(url))
    } else {
      throw new Error('Request Object: Expected [object Request], got undefined')
    }
  }
}

export default Serve