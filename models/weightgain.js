const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const weightgainSchema = new mongoose.Schema({
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

const weightgain = mongoose.model('weightgain', weightgainSchema, "weightgain");

module.exports = weightgain;