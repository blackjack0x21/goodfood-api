import express from "express";
import {
  createEmployeeHandler,
  getEmployeeHandler
} from "../controller/employee.controller";
import validateResource from "../middleware/validateResource";
import {
  createEmployeeSchema,
  getEmployeeSchema
} from "../schema/employee.schema";

const router = express.Router();

/**
 * @openapi
 * /api/employee:
 *   post:
 *     tags:
 *       - Employee
 *     summary: Creates an Employee
 *     requestBody:
 *       description: A JSON object containing an employee's information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - authToken
 *              - firstName
 *              - lastName
 *              - email
 *              - accountType
 *             properties:
 *               authToken:
 *                 type: string
 *                 description: User's auth token to execute the request
 *               firstName:
 *                 type: string
 *                 description: Employee's first name
 *               lastName:
 *                 type: string
 *                 description: Employee's last name
 *               email:
 *                 type: string
 *                 description: Employee's email
 *               accountType:
 *                 type: number
 *                 description: Employee's account type
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: User already exists
 *       400:
 *         description: User's data is invalid
 */
router.post(
  "/api/employee",
  validateResource(createEmployeeSchema),
  createEmployeeHandler
);

/**
 * @openapi
 * /api/employee:
 *   get:
 *     tags:
 *       - Employee
 *     summary: Get the list of the employees
 *     requestBody:
 *       description: A JSON object containing an employee's information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - authToken
 *              - userId
 *             properties:
 *               authToken:
 *                 type: string
 *                 description: User's auth token to execute the request
 *               userId:
 *                 type: string
 *                 description: Employee's first name
 *     responses:
 *       200:
 *         description: Array of Employees
 *       400:
 *         description: User's data is invalid
 *       500:
 *         description: An error has occured
 */
router.get(
  "/api/employee",
  validateResource(getEmployeeSchema),
  getEmployeeHandler
);

export default router;