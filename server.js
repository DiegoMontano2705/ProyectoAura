const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;
const {mogoUrl} = require('./keys');

require('./models/userModel')
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen( PORT, () => {
    console.log( 'Sever on port ', PORT);

    const settings = {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    };

    new Promise( (resolve, reject) => {
        mongoose.connect( 'mongodb+srv://m001-student:adminJoyeriaAura@joyeriaaura.mv3qt.mongodb.net/JoyeriaAura?retryWrites=true&w=majority', settings, ( err ) => {
            if ( err ){
                reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err =>{
        mongoose.disconnect();
        console.log( err );
    });
})
















/*
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const fileUpload = require('express-fileupload');

const app = new express();

const mongoStore = connectMongo(expressSession);

//DB CONNECTION
app.listen( 8080, () => {
    console.log( 'Sever on port ', 8080);

    const settings = {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    };

    new Promise( (resolve, reject) => {
        mongoose.connect( 'URL', settings, ( err ) => {
            if ( err ){
                reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err =>{
        mongoose.disconnect();
        console.log( err );
    });
})
*/