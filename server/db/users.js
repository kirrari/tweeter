import prisma from '.';
import bcrypt from 'bcrypt';

export const createUser = (userData) => {
  const hashedUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({
    data: hashedUserData,
  });
};

export const getUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};
