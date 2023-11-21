import { routesConfig } from './config/routeConfig';
import { globalErrorHandler } from './middlewares/error-handlers.mw';

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
//Routes configuration
routesConfig(app);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log('App is running on port http://localhost:8080');
})
