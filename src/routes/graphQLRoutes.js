// src/routes/postRoutes.js
const express = require('express');
const { main } = require('../controllers/graphQLController');
const router = express.Router();

router.get('/cli', main);
router.get('/graphQLClient', main);

module.exports = router;
