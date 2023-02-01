import { Address } from "@prisma/client";
import prisma from "../database";
import { AddressBody } from "../protocols";

async function getAddress(): Promise<Address[]> {
  return await prisma.address.findMany();
}

async function getUserAddress(userId: number): Promise<Address> {
  return await prisma.address.findFirst({
    where: { userId },
  });
}

async function updateUserAddress(
  addressId: number,
  address: AddressBody
): Promise<number> {
  const updated = await prisma.address.update({
    where: {
      id: addressId,
    },
    data: {
      ...address,
    },
  });
  return updated.id;
}

export const addressRepository = {
  getAddress,
  getUserAddress,
  updateUserAddress,
};
