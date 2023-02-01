import { Router } from "express";
import { userSchema } from "../schema/usersSchema.js";
import { bodyValidation } from "../middlewares/bodyValidation.js";
import { queryValidation } from "../middlewares/queryValidation.js";
import { paramsValidation } from "../middlewares/paramsValidation.js";
import {
  insertUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
} from "../controllers/usersController.js";

const router = Router();

router.post("/", bodyValidation(userSchema), insertUser);
router.get("/", queryValidation(), getUsers);
router.get("/:id", paramsValidation(), getUserById);
router.put("/:id", bodyValidation(userSchema), updateUser);
router.delete("/:id", deleteUserById);

export default router;
