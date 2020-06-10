import AppServiceProvider from "./Providers/appServiceProvider.js";
import Student from "./Models/student.js";
import School from "./Models/school.js";
import Teacher from "./Models/teacher.js";

export const providers = [
    AppServiceProvider
]

export const models = [
    Student,
    School,
    Teacher
]

