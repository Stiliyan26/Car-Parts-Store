import { AdminData } from '../types/IData';
import { hashPassword } from '../utils/helpers';

import { db } from '../utils/db.server';

export const getAdminByEmailAndPassword = async (
  email: string,
  password: string
): Promise<AdminData | null> => {
  const hashedPassword = hashPassword(password);

  return await db.admin.findFirst({
    where: {
      email,
      password: hashedPassword
    },
    select: {
      id: true,
      name: true,
      email: true
    }
  })
}


