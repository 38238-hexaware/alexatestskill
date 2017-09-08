const request = require('request-promise');
var fetch = require('node-fetch');
var express = require('express');
var app = express();
var reqnew = require('request');
app.get("/", function (req, res) {
    // reqnew('http://widgets.fabulously40.com/horoscope.json?sign=capricorn', function (error, response, body) {
    // res.send(JSON.stringify(body));
    // });
    rp('http://widgets.fabulously40.com/horoscope.json?sign=capricorn')
        .then(function (htmlString) {
           res.send(JSON.stringify(htmlString)); 
        })
        .catch(function (err) {
            res.send(JSON.stringify(err)); 
        });
})

// const options = {  
//   method: 'GET',
//   uri: 'http://widgets.fabulously40.com/horoscope.json?sign=capricorn',
// }
// request(options)git
//   .then(function (response) {
//     console.log(JSON.stringify(response));
//   })
//   .catch(function (err) {
//   console.log(JSON.stringify(err));
// })
// const unhandledRejection = require("unhandled-rejection");
// let rejectionEmitter = unhandledRejection({
//     timeout: 20
// });
// rejectionEmitter.on("unhandledRejection", (error, promise) => {
//     console.log(JSON.stringify(error));
// });

// rejectionEmitter.on("rejectionHandled", (error, promise) => {
//         console.log(JSON.stringify(error));
// })
// fetch('http://widgets.fabulously40.com/horoscope.json?sign=capricorn')
//     .then(function(res) {
//         console.log(res);
//         return res.text();
//     }).then(function(body) {
//         console.log(body);
//     });

app.listen("3000", function () {
    console.log('listeneing at the port');
})