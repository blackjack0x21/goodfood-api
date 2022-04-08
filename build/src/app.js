"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const supabase_1 = require("./utils/supabase");
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
const port = config_1.default.get("port");
app.listen(port, () => {
    logger_1.default.info(`App started at http://localhost:${port}`);
    (0, swagger_1.default)(app, port);
    supabase_1.supabase;
});
