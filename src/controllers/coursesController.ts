import { Request, Response } from "express";
import { CourseBody } from "../protocols";
import { coursesServices } from "../services/coursesServices";
import { handleApplicationErrors } from "../middlewares/errorHandlingMiddleware";

export async function createCourse(req: Request, res: Response) {
  const course = req.body as CourseBody;

  try {
    const id = await coursesServices.createCourse(course);
    res.send({ message: `Created course id = ${id}` });
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function getCourses(req: Request, res: Response) {
  try {
    const courses = await coursesServices.getCourses();
    res.send(courses);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function getCourse(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const course = await coursesServices.getCourse(id);
    res.send(course);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function deleteCourse(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const courseDeletedId = await coursesServices.deleteCourse(id);
    res.send({ message: `Created course id = ${courseDeletedId}` });
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}

export async function updateCourse(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const course = req.body;

  try {
    const courseUpdated = await coursesServices.updateCourse(id, course);
    res.send(courseUpdated);
  } catch (err) {
    handleApplicationErrors(err, res);
  }
}
