import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import httpStatus from "http-status";
import { paramsSchema } from "../schema/paramsSchema";

export function paramsValidation() {
  return (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;

    const { error }: Joi.ValidationResult = paramsSchema.validate(params, {
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
