'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 6060
app.set('port', port)
const request = require('request');

// MIDDLEWARE (transform stream)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/build-a-rig/ethereum/earnings/*', (req, res) => {
  let apiCall = req.url.slice('/build-a-rig/ethereum/earnings/'.length)
  let apiReq = `https://www.coincalculators.io/api?name=ethereum&hashrate=288000000&power=910&powercost=0.13&difficultytime=6${apiCall}`
  request.get(apiReq, (err, _, body) => {
    res.send(body)
  });
});

app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
)