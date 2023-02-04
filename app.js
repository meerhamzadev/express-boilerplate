const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')
const baseRouter = require('./routes/indexRoutes');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(baseRouter)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
