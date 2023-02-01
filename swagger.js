const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger/swagger_output.json'
const endpointsFiles = ['./routes/indexRoutes.js']

swaggerAutogen(outputFile, endpointsFiles)