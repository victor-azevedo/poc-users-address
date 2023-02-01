import { Router } from "express";
import { bodyValidation } from "../middlewares/bodyValidation";
import { courseSchema } from "../schema/coursesSchema";
import {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/coursesController";

const router = Router();

router.post("/", bodyValidation(courseSchema), createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", bodyValidation(courseSchema), updateCourse);

export default router;
