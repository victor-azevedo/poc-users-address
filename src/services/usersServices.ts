import { User } from "@prisma/client";
import { UserAddressBody, UserBody } from "../protocols";
import { usersRepository } from "../repositories/usersRepository";
import { badRequestError, notFoundError } from "../errors";

async function insertUser(userAddress: UserAddressBody): Promise<number> {
  const user = { ...userAddress };
  const address = { ...userAddress.address };
  delete user.address;

  const id: number = await usersRepository.insertUser(user, address);

  if (!id) {
    throw badRequestError();
  }

  return id;
}

async function getUsers(bornAfter: string): Promise<User[]> {
  if (bornAfter) {
    const usersList: User[] = await usersRepository.getUsersFilterDate(
      new Date(bornAfter)
    );

    return usersList;
  }

  const usersList: User[] = await usersRepository.getUsers();

  return usersList;
}

async function getUserById(id: number): Promise<User> {
  const user: User = await usersRepository.getUserById(id);

  if (!user) {
    throw notFoundError();
  }

  return user;
}

async function deleteUserById(id: number): Promise<number> {
  const idDeleted: number = await usersRepository.deleteUserById(id);

  if (!idDeleted) {
    throw notFoundError();
  }

  return idDeleted;
}

async function updateUser(id: number, user: UserBody): Promise<void> {
  const updateCount: number = await usersRepository.updateUser(id, user);

  if (updateCount === 0) {
    throw Error("Not Found");
  }
}

export const usersServices = {
  insertUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUser,
};
