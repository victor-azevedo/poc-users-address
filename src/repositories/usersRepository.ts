import { User } from "@prisma/client";
import prisma from "../database";
import { AddressBody, UserBody } from "protocols";
import dayjs from "dayjs";

async function insertUser(
  user: UserBody,
  address: AddressBody
): Promise<number> {
  const birthday = dayjs(user.birthday).format();
  const newUser = await prisma.user.create({
    data: { ...user, birthday, address: { create: { ...address } } },
    select: { id: true },
  });
  return newUser.id;
}

async function getUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

async function getUserById(id: number): Promise<User> {
  return await prisma.user.findUnique({
    where: { id },
  });
}

async function getUsersFilterDate(_bornAfter: Date): Promise<User[]> {
  const bornAfter = dayjs(_bornAfter).format();
  return await prisma.user.findMany({
    where: {
      birthday: {
        gte: bornAfter,
      },
    },
  });
}

async function deleteUserById(id: number): Promise<number> {
  const deleted = await prisma.user.delete({
    where: { id },
    select: { id: true },
  });
  return deleted.id;
}

async function updateUser(id: number, user: UserBody): Promise<number> {
  const birthday = dayjs(user.birthday).format();
  const updated = await prisma.user.update({
    where: { id },
    data: { ...user, birthday },
    select: { id: true },
  });
  return updated.id;
}

export const usersRepository = {
  insertUser,
  getUsers,
  getUserById,
  getUsersFilterDate,
  deleteUserById,
  updateUser,
};
