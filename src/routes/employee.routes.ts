import express from "express";
import {
  createEmployeeHandler,
} from "../controller/employee.controller";
import validateResource from "../middleware/validateResource";
import {
  createEmployeeSchema,
} from "../schema/employee.schema";

const router = express.Router();

/**
 * @openapi
 * /api/employees/:
 *  get:
 *     tags:
 *     - Verify
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.post(
  "/api/employees",
  validateResource(createEmployeeSchema),
  createEmployeeHandler
);

export default router;