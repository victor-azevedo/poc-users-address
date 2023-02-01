import coreJoi, { ObjectSchema } from "joi";
import joiDate from "@joi/date";
import { UserAddressBody } from "protocols.js";
import { addressSchema } from "./addressSchema";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const userSchema: ObjectSchema = Joi.object<UserAddressBody>({
  name: Joi.string().trim().min(3).required(),
  nickname: Joi.string().trim().min(3).required(),
  birthday: Joi.date().format("YYYY-MM-DD").required(),
  cpf: Joi.string().trim().length(11).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().min(10).max(11).required(),
  address: addressSchema.required(),
});
