app.engine('html', require('ejs').renderFile);    

app.get('/', function(req, res){
  res.render("index.html");
})
(async() => {
  await import('./server.mjs').then(e=>e.default({
    cookie: false, // Cookie Authentication
    primaryProxy: 'ultraviolet', // Main Proxy on Enter
    googleBlock: true, // Block Google's Bots
    cors: true, // Allow Cross-Origin Requests
    config: {
      port: 10000, // Port to host site on (Default: 8080)
      gamePort: 3000, // Port for games (Default: 3000) (NOT IMPLEMENTED)
    }
  }));
})();
