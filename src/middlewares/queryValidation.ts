import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import httpStatus from "http-status";
import { querySchema } from "../schema/querySchema";

export function queryValidation() {
  return (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const { error }: Joi.ValidationResult = querySchema.validate(query, {
      abortEarly: false,
    });

    if (error) {
      const message: string[] = error.details.map((detail) => detail.message);

      console.log("UNPROCESSABLE_ENTITY:", message.join(", "));
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send({ message: message.join(", ") });
    }

    next();
  };
}
