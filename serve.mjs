import mime from 'mime'
import { readFileSync } from 'fs'
import { getHWID } from "./public/copyright/hardwareidjs.js"

var defaults = {
  indexfile: true,
  '404': null,
  '403': null,
  'index': null
}
const hwidban = JSON.parse(fs.readFileSync('ban.json'));
var hwid="000x000"
getHWID().then((result)=>{hwid=result})

export function Serve(path, config, cors) {
  var config = Object.assign(defaults, config)
  return function(req, res, cors) {
    var type = mime.getType(req.url.split('?')[0].split('#')[0])||'text/html'
    if (req) {
      var url = path+req.url.split('?')[0].split('#')[0]
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {url+='index.html'}
      try {readFileSync(url)} catch {try {readFileSync(url+=".html")} catch { return res.end('Not Found') }}
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {if (config.index) return config.index(req, res, readFileSync(url), type)}
      for(var oio = 0; oio<hwidban.length; oio++){
        if(hwidban[oio]!="NONE"){
        if(hwidban[oio].hwid==hwid&&hwidban[oio].type=="soft"){
          return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync("ban.html"))
        }else if(hwidban[oio].hwid==hwid&&hwidban[oio].type=="hard"){
          return res.end('Not Found')
        }}
      }
      return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync(url))
    } else {
      throw new Error('Request Object: Expected [object Request], got undefined')
    }
  }
}

export default Serve