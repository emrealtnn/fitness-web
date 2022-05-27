const {Router} = require('express');
const contactController = require('../controllers/contactController');

const router = Router();

router.get('/contact',contactController.contactGet);

module.exports = router;