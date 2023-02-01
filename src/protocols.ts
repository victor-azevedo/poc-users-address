import { User } from "@prisma/client";
import { Address } from "@prisma/client";
import { Course } from "@prisma/client";

export type UserBody = Omit<User, "id" | "createdAt">;
export type UserAddressBody = UserBody & { address: AddressBody };
export type UserQuery = { bornAfter: Date };

export type AddressBody = Omit<Address, "id" | "userId">;

export type CourseBody = Omit<Course, "id" | "createdAt">;

export type ApplicationError = { name: string; message: string };

export type RequestError = ApplicationError & {
  data: null;
  status: number;
  statusText: string;
};
