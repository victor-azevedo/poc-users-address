import { User } from "@prisma/client";
import { Address } from "@prisma/client";
import { Course } from "@prisma/client";

export type UserBody = Omit<User, "id" | "createdAt">;
export type AddressBody = Omit<Address, "id">;
export type CourseBody = Omit<Course, "id" | "createdAt">;
