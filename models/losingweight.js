const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const losingweightSchema = new mongoose.Schema({
    "beslenme": {type:Array },
    "gogus": {type:Array },
    "sirt": {type:Array },
    "omuz": {type:Array },
    "kol": {type:Array },
    "bacak": {type:Array },
    "karin": {type:Array },
    "kardiyo": {type:Array },
    "fullbody": {type:Array },
});

const losingweight = mongoose.model('losingweight', losingweightSchema, "losingweight");

module.exports = losingweight;