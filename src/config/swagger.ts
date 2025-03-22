// src/config/swagger.ts
import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Express API with Swagger in TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['src/routes/*.ts', 'src/controllers/*.ts'], // ← change as needed
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
