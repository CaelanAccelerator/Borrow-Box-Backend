import { PrismaClient } from "../generated/prisma";

export const prisma = new PrismaClient();

if(process.env.NODE_ENV !== "test"){
  const close = async () => { await prisma.$disconnect(); process.exit(0); };
  process.on("SIGINT", close);
  process.on("SIGTERM", close);
}