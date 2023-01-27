import { User } from "@prisma/client";
import prisma from "../database";
import { UserBody } from "protocols";

async function insertUser(user: UserBody): Promise<number> {
  console.log({ ...user });
  const newUser = await prisma.user.create({ data: user });
  return;
}

async function getUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

async function getUserById(id: number): Promise<User> {
  return;
}

async function getUsersFilterDate(bornAfter: Date): Promise<User[]> {
  return;
}

async function deleteUserById(id: number): Promise<number> {
  return;
}

async function updateUser(id: number, user: UserBody): Promise<number> {
  return;
}

export const usersRepository = {
  insertUser,
  getUsers,
  getUserById,
  getUsersFilterDate,
  deleteUserById,
  updateUser,
};
