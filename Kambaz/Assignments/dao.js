import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

// Retrieve all assignments
export function findAllAssignments() {
    const { assignments } = Database;
    return assignments;
}

// Retrieve an assignment by ID
export function findAssignmentById(assignmentId) {
    const { assignments } = Database;
    return assignments.find((assignment) => assignment._id === assignmentId);
}

export function findAssignmentByCourseId(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId)
}

// Create a new assignment
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

// Update an assignment by ID
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    if (!assignment) return null;
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

// Delete an assignment by ID
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    const assignmentIndex = assignments.findIndex((assignment) => assignment._id === assignmentId);
    if (assignmentIndex === -1) return false;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return true;
}