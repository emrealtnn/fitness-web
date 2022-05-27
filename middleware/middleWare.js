const jwt = require('jsonwebtoken');
const User = require("../models/User");
const Formprotection = require("../models/formprotection");
const Losingweight = require ("../models/losingweight");
const Weightgain = require ("../models/weightgain");

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

const getData = async (req,res,next) => {
    try {
        let formprotection = await Formprotection.find({});
        let losingweight = await Losingweight.find({});
        let weightgain = await Weightgain.find({});
        res.locals.formprotection = formprotection;
        res.locals.losingweight = losingweight;
        res.locals.weightgain = weightgain;
        console.log(res.locals.losingweight);
        next();

    } catch (error) {
        console.log(error);
    }
}
module.exports = {checkUser, getData };