import { User } from "@prisma/client";
import { Request, Response } from "express";
import { UserAddressBody, UserBody, UserQuery } from "../protocols";
import { usersServices } from "../services/usersServices";
import { handleApplicationErrors } from "../middlewares/errorHandlingMiddleware";
import dayjs from "dayjs";
import { ParsedUrlQuery } from "querystring";
import httpStatus from "http-status";

export async function insertUser(req: Request, res: Response) {
  const user = req.body as UserAddressBody;

  try {
    const id: number = await usersServices.insertUser(user);

    res.status(httpStatus.CREATED).send({ message: `Created user id = ${id}` });
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function getUsers(req: Request, res: Response) {
  const bornAfter = req.query?.bornAfter as string;

  try {
    const users: User[] = await usersServices.getUsers(bornAfter);
    res.send(users);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function getUserById(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const user: User = await usersServices.getUserById(id);
    res.send(user);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function deleteUserById(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const IdDeleted = await usersServices.deleteUserById(id);
    res.send({ message: `Deleted user id = ${IdDeleted}` });
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function updateUser(req: Request, res: Response) {
  const user = req.body as UserBody;
  const id = parseInt(req.params.id);

  try {
    await usersServices.updateUser(id, user);
    res.send({ message: `Update user id = ${id}` });
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}
