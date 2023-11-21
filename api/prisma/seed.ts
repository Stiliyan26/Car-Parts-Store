import { db } from '../server/utils/db.server';

import { hashPassword } from '../server/utils/helpers';

interface Admin {
  name: string;
  email: string;
  password: string;
}

function getAdmins(): Array<Admin> {
  return [
    {
      name: 'Stiliyan',
      email: 'stiliyan@abv.bg',
      password: '12345',
    },
    {
      name: 'Anton',
      email: 'anton@abv.bg',
      password: '12345',
    },
  ];
}

interface Role {
  name: string,
}

function getRoles(): Array<Role> {
  return [{
    name: 'Viewer'
  },
  {
    name: 'Buyer'
  }]
}

async function seed() {
  await Promise.all([
    getAdmins().map(async (admin) => {
      return await db.admin.create({
        data: {
          name: admin.name,
          email: admin.email,
          password: hashPassword(admin.password),
        },
      });
    }),
    getRoles().map(async (role) => {
      return await db.role.create({
        data: {
          name: role.name
        }
      })
    })
  ]);
}

seed();
