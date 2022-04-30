import express from "express";
import {
  createCustomerHandler,
} from "../controller/customer.controller";
import validateResource from "../middleware/validateResource";
import {
  createCustomerSchema,
} from "../schema/customer.schema";

const router = express.Router();

/**
 * @openapi
 * /api/customers/:
 *  get:
 *     tags:
 *     - Verify
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.post(
  "/api/customer",
  validateResource(createCustomerSchema),
  createCustomerHandler
);

export default router;