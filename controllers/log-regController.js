const User = require("../models/User");
const jwt = require('jsonwebtoken');

const loginGet = (req, res) => {
    res.render('log-reg');
};

const registerGet = (req, res) => {
    res.render('log-reg');
};                  

const loginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

const registerPost = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, "net ninja secret", { expiresIn: 3 * 24 * 60 * 60 });
};

module.exports = { registerGet, registerPost,loginGet, loginPost };