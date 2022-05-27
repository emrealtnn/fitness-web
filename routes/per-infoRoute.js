const {Router} = require('express');
const perinfoController = require('../controllers/per-infoController');

const router = Router();

router.get('/per-info',perinfoController.perinfoGet);
router.post('/per-info', perinfoController.perinfoPost);
module.exports = router;