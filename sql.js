const { Client } = require('pg')
const client = new Client({
  user: 'f1xgod',
  host: 'dpg-cmdfbkmd3nmc73djmr70-a.ohio-postgres.render.com',
  database: 'fixcraft',
  password: 'LxH8X8t0kQdcmR8SCmBrgmOer9SuhHO6',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
