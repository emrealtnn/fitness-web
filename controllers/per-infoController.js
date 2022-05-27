const User= require("../models/User")
const perinfoGet = (req, res) => {
    res.render('per-info');
}
const perinfoPost = (req,res) => {
    const {boy,kilo}=req.body;  
    try {
    User.find()
    } catch (error) {
        console.log(error);
    }  
}
module.exports = {perinfoGet,perinfoPost};
