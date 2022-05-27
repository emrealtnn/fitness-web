const {Router} = require('express');
const trainingController = require('../controllers/trainingController');

const router = Router();

router.get('/training' ,trainingController.trainingGet);

module.exports = router;