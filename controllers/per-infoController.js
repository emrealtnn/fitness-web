const User= require("../models/User")
const perinfoGet = (req, res) => {
    res.render('per-info');
}

module.exports = {perinfoGet};
