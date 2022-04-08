import express from "express";
import {
  createUserHandler,
  verifyUserHandler,
} from "../controller/user.controller";
import validateResource from "../middleware/validateResource";
import {
  createUserSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyUserSchema,
} from "../schema/user.schema";

const router = express.Router();

router.post(
  "/api/users",
  validateResource(createUserSchema),
  createUserHandler
);

/**
 * @openapi
 * /api/users/verify/:
 *  get:
 *     tags:
 *     - Verify
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get(
  "/api/users/verify/",
  verifyUserHandler
);

export default router;
