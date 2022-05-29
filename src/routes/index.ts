import express from "express";
import user from "./user.routes";
import customer from "./customer.routes";
import employee from "./employee.routes";

const router = express.Router();

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(user);
router.use(customer);
router.use(employee);

export default router;