import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'defaultuser@example.com',
      name: 'Default User',
      password: 'securepassword'
    }
  });

  console.log(`Created user with ID: ${newUser.id} and name: ${newUser.name}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
