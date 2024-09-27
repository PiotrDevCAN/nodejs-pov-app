// src/routes/postRoutes.js
const express = require('express');
const { main, about, contact, services } = require('../controllers/staticController');
const router = express.Router();

router.get('/', main);
router.get('/about', about);
router.get('/contact', contact);
router.get('/services', services);

module.exports = router;
