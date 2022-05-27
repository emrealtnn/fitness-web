const {Router} = require('express');
const suplementController = require('../controllers/suplementController');

const router = Router();

router.get('/suplement',suplementController.suplementGet);

module.exports = router;