import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enroll(userId, courseId) {
    const { enrollments } = Database;
    const checkIfEnrolled = enrollments.filter((enrollment) =>
        userId === enrollment.user
        && courseId === enrollment.course)
    if (!checkIfEnrolled) {
        // if not enrolled, add
        enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
    } else {
        // otherwise, unenroll
        enrollments.filter((enrollment) => !(userId === enrollment.user
            && courseId === enrollment.course));
    }
    return enrollments
}
