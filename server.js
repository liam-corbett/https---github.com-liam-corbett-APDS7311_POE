//https://www.w3schools.com/nodejs/default.asp
const http = require('https');
const app = require('./app');
const fs = require('fs');
const port= 3008

//https://www.w3schools.com/nodejs/met_http_createserver.asp
const server = http.createServer(
    {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem'),
    },app);

server.listen(port)