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
 * /api/customer:
 *   post:
 *     tags:
 *       - Products
 *     summary: Creates a customer
 *     requestBody:
 *       description: A JSON object containing a customer's information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - firstName
 *              - lastName
 *              - password
 *              - passwordConfirmation
 *              - email
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Customer's first name
 *               lastName:
 *                 type: string
 *                 description: Customer's last name
 *               password:
 *                 type: string
 *                 description: Customer's password
 *               passwordConfirmation:
 *                 type: string
 *                 description: Customer's password confirmation
 *               email:
 *                 type: string
 *                 description: Customer's email
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: User already exists
 *       400:
 *         description: Passwords do not match | User's data is invalid
 */

// /**
//  * @openapi
//  * /api/customer:
//  *   post:
//  *     description: Create a customer
//  *     tags: [Customer]
//  *     parameters:
//  *       - name: firstName
//  *         description: Customer's first name.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: lastName
//  *         description: Customer's last name.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: password
//  *         description: Customer's password.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: passwordConfirmation
//  *         description: Customer's passwordConfirmation.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *       - name: email
//  *         description: Customer's email.
//  *         in: formData
//  *         required: true
//  *         type: string
//  *     responses:
//  *       201:
//  *         description: Created
//  *       409:
//  *         description: User already exists
//  *       400:
//  *         description: Passwords do not match | User's data is invalid
//  */
router.post(
  "/api/customer",
  validateResource(createCustomerSchema),
  createCustomerHandler
);

export default router;