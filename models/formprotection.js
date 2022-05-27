const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const formprotectionSchema = new mongoose.Schema({
    "beslenme": {type:Array },
    "gogus": {type:Array },
    "sirt": {type:Array },
    "omuz": {type:Array },
    "kol": {type:Array },
    "bacak": {type:Array },
    "kardiyo": {type:Array },
    "fullbody": {type:Array },
    "karin": {type:Array },
});

const formprotection = mongoose.model('formprotection', formprotectionSchema,"formprotection");

module.exports = formprotection;