import { addressSchema } from "../schema/addressSchema";
import {
  getAddress,
  getUserAddress,
  updateUserAddress,
} from "../controllers/addressController";

import { Router } from "express";
import { bodyValidation } from "../middlewares/bodyValidation";

const router = Router();

router.get("/", getAddress);
router.get("/:id", getUserAddress);
router.put("/:id", bodyValidation(addressSchema), updateUserAddress);

export default router;
