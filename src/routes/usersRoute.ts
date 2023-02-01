import { Router } from "express";
import { userSchema } from "../schema/usersSchema";
import { bodyValidation } from "../middlewares/bodyValidation";
import { queryValidation } from "../middlewares/queryValidation";
import { paramsValidation } from "../middlewares/paramsValidation";
import {
  insertUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
} from "../controllers/usersController";

const router = Router();

router.post("/", bodyValidation(userSchema), insertUser);
router.get("/", queryValidation(), getUsers);
router.get("/:id", paramsValidation(), getUserById);
router.put("/:id", bodyValidation(userSchema), updateUser);
router.delete("/:id", deleteUserById);

export default router;
