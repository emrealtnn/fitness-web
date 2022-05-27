const {Router} = require('express');
const perinfoController = require('../controllers/per-infoController');

const router = Router();

router.get('/per-info',perinfoController.perinfoGet);
module.exports = router;