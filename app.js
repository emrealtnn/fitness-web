const express = require('express');
const mongoose = require('mongoose');
const homeRoute = require('./routes/homeRoute');
const contactRoute = require('./routes/contactRoute');
const logregRoute = require('./routes/log-regRoute');
const nutritionRoute = require('./routes/nutritionRoute');
const perinfoRoute = require('./routes/per-infoRoute');
const suplementRoute = require('./routes/suplementRoute');
const trainingRoute = require('./routes/trainingRoute');
const cookieParser = require('cookie-parser');
const { checkUser,getData } = require('./middleware/middleWare');
const logoutRoute = require('./routes/logoutRoute');

const app = express();
const port = 8000;
const url ="mongodb+srv://emrealtn:36732586Ea@fitnessweb.96da4.mongodb.net/fitness?retryWrites=true&w=majority"

const connectDb = (url) => {
    mongoose.connect(url)
        .then(() => {
            console.log('Connected to MongoDB.');
        })
        .catch(err => {
            console.log(err);
        });
}

connectDb(url);


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
   
app.get('*', checkUser);
app.get('*', getData);
app.use(homeRoute,contactRoute,logregRoute,nutritionRoute,perinfoRoute,suplementRoute,trainingRoute,logoutRoute);

app.listen(port, () => {
console.log("Server online...");
});