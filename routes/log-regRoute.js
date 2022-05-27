const {Router} = require('express');
const logregController = require('../controllers/log-regController');

const router = Router();

router.get('/log-reg',logregController.loginGet);
router.post('/login',logregController.loginPost);
router.post('/register',logregController.registerPost);
module.exports = router;