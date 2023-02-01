import coreJoi, { ObjectSchema } from "joi";
import joiDate from "@joi/date";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const querySchema: ObjectSchema = Joi.object({
  bornAfter: Joi.date().format("YYYY-MM-DD").optional(),
});
