import { Course } from "@prisma/client";
import prisma from "../database";
import dayjs from "dayjs";
import { CourseBody } from "protocols";

async function createCourse(course: CourseBody): Promise<number> {
  const startDate = dayjs(course.startDate).format();
  const endDate = dayjs(course.endDate).format();
  const newCourse = await prisma.course.create({
    data: { ...course, startDate, endDate },
    select: { id: true },
  });

  return newCourse.id;
}

async function getCourses(): Promise<Course[]> {
  const courses = await prisma.course.findMany();
  return courses;
}

async function getCourse(id: number): Promise<Course> {
  const course = await prisma.course.findFirst({
    where: { id },
  });
  return course;
}

async function deleteCourse(id: number): Promise<number> {
  const courseDeleted = await prisma.course.delete({
    where: { id },
    select: { id: true },
  });
  return courseDeleted.id;
}

async function updateCourse(id: number, course: CourseBody): Promise<Course> {
  const startDate = dayjs(course.startDate).format();
  const endDate = dayjs(course.endDate).format();
  const courseUpdated = await prisma.course.update({
    where: { id },
    data: { ...course, startDate, endDate },
  });
  return courseUpdated;
}

export const coursesRepository = {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
};
