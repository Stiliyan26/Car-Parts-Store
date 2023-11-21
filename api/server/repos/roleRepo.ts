import { db } from '../utils/db.server';

export const getRoleIdByName = async (name: string): Promise<string | undefined> => {
  const roleData = await db.role.findFirst({
    where: {
      name
    },
    select: {
      id: true
    }
  })

  return roleData?.id
}