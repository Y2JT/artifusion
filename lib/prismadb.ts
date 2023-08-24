import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined;
};

// Prevent multiple instances of Prisma Client in development
// Add prisma var to our global window object; if it doesn't exist, create a new instance of PrismaClient
// next13 reloading there is a chance that multiple instances of PrismaClient will be created
// This is a workaround to prevent that from happening
// globalThis is a new feature that allows us to access the global window object in the browser
// Not affected by hot reloading; no error: multiple prisma clients active

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb;