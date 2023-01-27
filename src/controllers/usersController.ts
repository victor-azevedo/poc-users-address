import { User } from "@prisma/client";
import { Request, Response } from "express";
import { queryRequest } from "middlewares/usersMiddleware";
import { UserAddressBody, UserBody } from "protocols.js";
import { usersServices } from "../services/usersServices";

export async function insertUser(req: Request, res: Response) {
  const user = req.body as UserAddressBody;

  try {
    const id: number = await usersServices.insertUser(user);

    res.send({ message: `Created user id = ${id}` });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}

export async function getUsers(req: queryRequest, res: Response) {
  const bornAfter = req.bornAfter as Date;

  try {
    const users: User[] = await usersServices.getUsers(bornAfter);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}

export async function getUserById(req: queryRequest, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const user: User = await usersServices.getUserById(id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}

export async function deleteUserById(req: queryRequest, res: Response) {
  const id = parseInt(req.params.id);

  try {
    await usersServices.deleteUserById(id);
    res.send({ message: `Deleted user id = ${id}` });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}

export async function updateUser(req: queryRequest, res: Response) {
  const user = req.body as UserBody;
  const id = parseInt(req.params.id);

  try {
    await usersServices.updateUser(id, user);
    res.send({ message: `Update user id = ${id}` });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}

type ParamId = { id: number };
