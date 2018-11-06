var express = require('express');
var app = express();
var fs = require("fs"); 
var cors = require('cors')
// var mysql = require('mysqls');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', function (req, res) {
    let{username , password} = req.body
    // console.log(req.body)
    if (!req.body) return res.sendStatus(400)
    console.log(username + ' ' + password);
    // if(username === "rma" && password === "1234567890") console.log("OK");
    res.send("OK");
    
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s", host, port)
});