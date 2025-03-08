import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis; 

const prismadb = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prismadb;
}

export default prismadb;
