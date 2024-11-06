export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "ADMIN"| "USER";
    token: string;
    courses: string[]
}