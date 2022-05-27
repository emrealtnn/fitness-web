const { Router } = require('express');
const logoutController = require('../controllers/logoutController');

const router = Router();

router.get('/logout', logoutController.logoutGet);

module.exports = router;