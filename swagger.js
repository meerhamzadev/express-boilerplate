const swaggerAutogen = require('swagger-autogen')()
const path = require('path');
const outputFile = path.join(__dirname, 'swagger', 'swagger_output.json');
const endpointsFiles = ['./routes/indexRoutes.js']

swaggerAutogen(outputFile, endpointsFiles)