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


app.get('/ethereum/mining/*', (req, res) => {
  let apiCall = req.url.slice('/ethereum/mining/'.length)
  console.log("this is apiCall", apiCall)
  let apiReq = `https://www.coincalculators.io/api${apiCall}`
  request.get(apiReq, (err, _, body) => {
    console.log("this is the body of our response", body)
    console.log('this is an error', err)
    res.send(body)
  });
});

app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
)