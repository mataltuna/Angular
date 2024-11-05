import { Course } from "../../courses/models";

export interface Lesson {
    id: string;
    name: string;
    createdAt: Date;
    orgCourse: Course;
    daysLesson: string;
    timeLesson: number;
}