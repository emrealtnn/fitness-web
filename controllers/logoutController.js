const logoutGet = (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
};

module.exports = { logoutGet };