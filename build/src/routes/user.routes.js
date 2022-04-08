"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const user_schema_1 = require("../schema/user.schema");
const router = express_1.default.Router();
/**
 * @openapi
 * /api/users/:
 *  get:
 *     tags:
 *     - Verify
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.post("/api/users", (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
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
router.get("/api/users/verify/", user_controller_1.verifyUserHandler);
exports.default = router;
