import { Request, Response } from "express";
import { addressServices } from "../services/addressServices";
import { AddressBody } from "../protocols";
import { handleApplicationErrors } from "../middlewares/errorHandlingMiddleware";

export async function getAddress(req: Request, res: Response) {
  try {
    const address = await addressServices.getAddress();
    return res.send(address);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function getUserAddress(req: Request, res: Response) {
  const userId = parseInt(req.params.id);

  try {
    const userAddress = await addressServices.getUserAddress(userId);
    return res.send(userAddress);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function updateUserAddress(req: Request, res: Response) {
  const addressId = parseInt(req.params.id);
  const newAddress = req.body as AddressBody;

  try {
    await addressServices.updateUserAddress(addressId, newAddress);
    res.sendStatus(200);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}
