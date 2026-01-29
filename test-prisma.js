import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

async function main() {
  try {
    console.log("=== Prisma Test Script ===");

    let users = await prisma.user.findMany();
    console.log("Users before insert:", users);

    if (users.length === 0) {
      const testUser = await prisma.user.create({
        data: { email: 'testuser@example.com', username: 'testuser' },
      });
      console.log("Created test user:", testUser);
    }

    users = await prisma.user.findMany();
    console.log("Users after insert:", users);

    const firstUser = users[0];
    let catches = await prisma.catch.findMany();
    console.log("Catches before insert:", catches);

    if (catches.length === 0) {
      const testCatch = await prisma.catch.create({
        data: {
          userId: firstUser.id,
          species: "Carp",
          weight: 3.5,
          length: 45,
          photoUrl: "https://example.com/catch.jpg",
        },
      });
      console.log("Created test catch:", testCatch);
    }

    catches = await prisma.catch.findMany({ include: { user: true } });
    console.log("Catches after insert:", catches);

  } catch (error) {
    console.error("Error during Prisma test:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
