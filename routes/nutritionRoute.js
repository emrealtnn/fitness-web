const {Router} = require('express');
const nutritionController = require('../controllers/nutritionController');

const router = Router();

router.get('/nutrition',nutritionController.nutritionGet);

module.exports = router;