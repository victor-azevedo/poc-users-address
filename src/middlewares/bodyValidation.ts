import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";

export function bodyValidation(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const { error }: Joi.ValidationResult = schema.validate(body, {
      abortEarly: false,
    });

    if (error) {
      const message: string[] = error.details.map((detail) => detail.message);

      console.log("BAD_REQUEST:", message.join(", "));
      return res.status(422).send({ message: message.join(", ") });
    }

    next();
  };
}
