import { authController } from '../controllers/authController';
import { adminController } from '../controllers/adminController';
import { companyController } from '../controllers/companyController';

import type { Express } from 'express';

export const routesConfig = (app: Express) => {
  app.use('/api/auth', authController);
  app.use('/api/admin', adminController);
  app.use('/api/company', companyController);
}
