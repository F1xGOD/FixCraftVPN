import { readFileSync } from 'fs';
import https from 'https';
import Serve from './serve.mjs'
import fetch from 'node-fetch'

const options = {

    key: readFileSync('./certs/privkey2.pem'), // replace it with your key path
  
    cert: readFileSync('./certs/fullchain2.pem'), // replace it with your certificate path
  
  }
  
  var server = https.createServer(options)
  server.on('request', (req, res) => {
    return res.writeHead(200, {'content-type':"text/html"}).end(readFileSync("./taken_down.html"))
  })
  server.listen(443, function(){console.log('https://localhost:'+443)})

