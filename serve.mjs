import mime from 'mime'
import { readFileSync } from 'fs';
import { get } from 'http';
import 'colors';






var defaults = {
  indexfile: true,
  '404': null,
  '403': null,
  'index': null
}

export function Serve(path, config, cors) {
  var config = Object.assign(defaults, config)
  return function(req, res, cors) {
    var hwidban = JSON.parse(readFileSync('./ban.json'));
    var type = mime.getType(req.url.split('?')[0].split('#')[0])||'text/html'
    if (req) {
      var ipAddress = req.socket.remoteAddress;
      hwidban = JSON.parse(readFileSync('./ban.json'));
      ipAddress=ipAddress.replace("::ffff:","")
      var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      date="["+date+"] "
      var userpath =path+req.url
      console.log(date.gray+ipAddress+" IS CONNECTING...".yellow + " ("+userpath.gray+")")
      for(var oio = 0; oio<hwidban.length; oio++){
        if(hwidban[oio]!="NONE"&&hwidban[oio].ip!=undefined){
        if(hwidban[oio].ip==ipAddress&&hwidban[oio].type=="soft"){
          console.log(date.gray+ipAddress+" SHOWING BAN PAGE, BAN".red+" ("+userpath.gray+")")
          return res.writeHead(200, {'content-type':'text/html', 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("./ban.html"))
        }else if(hwidban[oio].ip==ipAddress&&hwidban[oio].type=="hard"){
          console.log(date.gray+ipAddress+" NOT FOUND, BAN".red+" ("+userpath.gray+")")
          return res.end('Not Found')
        }else if(hwidban[oio].ip==ipAddress&&hwidban[oio].type=="ultimate"){
          console.log(date.gray+ipAddress+" REFUSED TO CONNECT, BAN".red+" ("+userpath.gray+")")
          return res.writeHead(403).end()
        }}
      }
      var url = path+req.url.split('?')[0].split('#')[0]
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {url+='index.html'}
      try {readFileSync(url)} catch {try {readFileSync(url+=".html")} catch { 
        if(url=="./public/api/ip.html"){
          return res.writeHead(200, {'content-type':"text/json", 'access-control-allow-origin':cors?'*':request.headers['host']}).end(`{"status":"200","ip":"${ipAddress}"}`)
        }else{
        console.log(date.gray+ipAddress+" TRIED TO ACCESS NON-EXISTENT RESOURCE!".red+" ("+userpath.gray+")")
        return res.end('Not Found') }}}
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {if (config.index) return config.index(req, res, readFileSync(url), type)}
      console.log(date.gray+ipAddress+" GRANTED VIEW ACCESS!".green+" ("+userpath.gray+")")
      return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync(url))
    } else {
      throw new Error('Request Object: Expected [object Request], got undefined')
    }
  }
}

export default Serve