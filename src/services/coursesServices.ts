import { CourseBody } from "protocols.js";
import { coursesRepository } from "../repositories/coursesRepository.js";
import { Course } from "@prisma/client";

async function createCourse(course: CourseBody): Promise<number> {
  const id = await coursesRepository.createCourse(course);

  return id;
}

async function getCourses(): Promise<Course[]> {
  const courses = await coursesRepository.getCourses();

  return courses;
}

async function getCourse(id: number): Promise<Course> {
  const course = await coursesRepository.getCourse(id);

  return course;
}

async function deleteCourse(id: number): Promise<number> {
  const courseDeletedId = await coursesRepository.deleteCourse(id);

  return courseDeletedId;
}

async function updateCourse(id: number, course: CourseBody): Promise<Course> {
  const courseUpdated = await coursesRepository.updateCourse(id, course);

  return courseUpdated;
}

export const coursesServices = {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
};
