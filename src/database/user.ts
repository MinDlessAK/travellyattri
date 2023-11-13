import { PrismaClient } from "@prisma/client";

interface createUserProps {
  email: string;
  name: string;
  contact: string;
}

const createUser = async (args: createUserProps) => {
  const prisma = new PrismaClient();
  const user: any = await prisma.user.create({
    data: { email: args.email, contact: args.contact, name: args.name },
  });
  console.log(user);
};

const getAllUser = async () => {
  const prisma = new PrismaClient();
  const user: any = await prisma.user.findMany();
  console.log(user);
};

export { createUser, getAllUser };
