"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
require("dotenv").config();
const config_1 = __importDefault(require("config"));
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = config_1.default.get("supabaseUrl");
const supabaseAnonKey = config_1.default.get("supabaseAnonKey");
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
