const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

console.log("SWAGGER RUNNING...")
module.exports= (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
