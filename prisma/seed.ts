import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'],
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

async function main() {
    // Create your user - replace 'elise.h' with your username from your .env file
    const username = process.env.NEXT_PUBLIC_USERNAME || 'elise.h';
    
    try {
        await prisma.userEntity.upsert({
            where: { id: username },
            update: {},
            create: { id: username }
        });
        
        console.log(`Seeded user: ${username}`);
    } catch (error) {
        console.error('Error seeding user:', error);
        throw error;
    }
}

main()
    .catch((error) => {
        console.error('Error seeding database:', error);
        process.exit(1);
    })
    .finally(async () => {
        // Explicitly disconnect after seeding
        await prisma.$disconnect();
    });