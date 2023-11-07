const express = require('express')
const app = express()
const urlprefix = '/api'
const mongoose = require('mongoose')
const Post = require('./modules/post')
const fs = require('fs');
const post = require('./modules/post')
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: {sslCA: cert}};
const connstring = 'mongodb+srv://LEE:c4Cr6aElbAb0Kr4v@cluster0.hqazew5.mongodb.net/myFirstDB?retryWrites=true&w=majority';

const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const helmet = require('helmet');
const morgan = require('morgan');

mongoose.connect(connstring)
.then(()=>
{
    console.log('Connected :-)')
})
.catch(() =>
{
    console.log('NOT Connected :-(')
},options);

app.use(express.json())

app.use(helmet());
app.use(morgan('dev'));


app.use((reg,res,next)=> 
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next(); 
});

app.get(urlprefix+'/', (req,res) => {
    res.send('Hello World')
})


app.use(urlprefix+'/posts', postRoutes)
app.use(urlprefix+'/users', userRoutes)


module.exports = app;