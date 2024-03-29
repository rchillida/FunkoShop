const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

/* MAIN ROUTES */

router.get('/home', mainController.home);
router.get('/shop', mainController.shop);
router.get('/Item', mainController.Item);

module.exports = router;