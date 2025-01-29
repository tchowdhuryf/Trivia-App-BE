const express = require('express');
const triviaCTRL = require('../controllers/triviaControllers.js');
const router = express.Router();

router
.route('/categories')

router
.route('/questions/:category')

router
.route('/questions/:category/:id')


module.exports = router;