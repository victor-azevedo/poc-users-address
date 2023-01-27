import { addressSchema } from "../schema/addressSchema.js";
import {
  getAddress,
  getUserAddress,
  updateUserAddress,
} from "../controllers/addressController.js";

import { Router } from "express";
import { bodyValidation } from "../middlewares/bodyValidation.js";

const router = Router();

router.get("/", getAddress);
router.get("/:id", getUserAddress);
router.put("/:id", bodyValidation(addressSchema), updateUserAddress);

export default router;
