import Joi, { ObjectSchema } from "joi";
import { AddressBody } from "../protocols.js";

export const addressSchema: ObjectSchema = Joi.object<AddressBody>({
  street: Joi.string().trim().required(),
  number: Joi.string().trim().required(),
  district: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().length(2).required(),
  complement: Joi.string().trim(),
});

export const addUserAddressSchema: ObjectSchema = Joi.object({
  userId: Joi.number().greater(0).required(),
  address: addressSchema.required(),
});
