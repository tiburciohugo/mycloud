import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerConfig } from './config/swagger';
import router from './routes/routes';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(router);

const swaggerSpec = swaggerJSDoc(swaggerConfig);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.get('/swagger.json', (_req, res) => res.send(swaggerSpec));

console.log(`To see the docs add swagger after the /`);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
