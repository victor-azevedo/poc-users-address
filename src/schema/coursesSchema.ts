import coreJoi, { ObjectSchema } from "joi";
import joiDate from "@joi/date";
import { CourseBody } from "../protocols";

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const courseSchema: ObjectSchema = Joi.object<CourseBody>({
  name: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  places: Joi.number().greater(0).required(),
  startDate: Joi.date().format("YYYY-MM-DD").required(),
  endDate: Joi.date().format("YYYY-MM-DD").required(),
  courseLoad: Joi.number().greater(0).required(),
});
