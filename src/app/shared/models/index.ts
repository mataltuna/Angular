export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    courses: string[]
}

export interface AuthData {
    email: string;
    password: string;
}

export interface Course {
    id: string;
    name: string;
    createdAt: Date;
    maxStud: number;
}

export interface Lesson {
    id: string;
    name: string;
    createdAt: Date;
    orgCourse: Course;
    daysLesson: string;
    timeLesson: number;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "ADMIN"| "USER"
    token: string;
}