const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const PORT = process.env.PORT || 3000

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'quesionts-bank',
      version: '1.0.0',
      description: 'Your API description',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

console.log("\n")
console.log('\x1b[32m%s\x1b[0m', '\u2714', `SWAGGER RUNNING:  http://localhost:${PORT}/api-docs/#/\n`)
module.exports= (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
