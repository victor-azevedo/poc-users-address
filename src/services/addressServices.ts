import { Address } from "@prisma/client";
import { AddressBody } from "../protocols";
import { addressRepository } from "../repositories/addressRepository";
import { notFoundError } from "../errors/not-found-error";

async function getAddress(): Promise<Address[]> {
  const address = await addressRepository.getAddress();

  if (!address) {
    throw notFoundError;
  }

  return address;
}

async function getUserAddress(id: number): Promise<Address> {
  const address = await addressRepository.getUserAddress(id);

  if (!address) {
    throw Error("Not Found");
  }

  return address;
}

async function updateUserAddress(
  addressId: number,
  address: AddressBody
): Promise<void> {
  const updateId: number = await addressRepository.updateUserAddress(
    addressId,
    address
  );

  if (updateId === 0) {
    throw Error("Not Found");
  }
}

export const addressServices = {
  getAddress,
  getUserAddress,
  updateUserAddress,
};
