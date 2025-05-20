const express = require('express');
const router = express.Router();
const categoryRoutes = require('./categoryRoutes');

router.use('/categories', categoryRoutes);

module.exports = router; 