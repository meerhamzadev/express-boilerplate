const express = require('express');
const itemRoutes = require('./itemRoutes');
const baseRouter = express.Router();

baseRouter.use('/api/item/', itemRoutes);

module.exports = baseRouter;