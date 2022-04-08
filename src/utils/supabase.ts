require("dotenv").config();
import config from "config";
import { createClient, SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl: string = config.get("supabaseUrl");
const supabaseAnonKey: string = config.get("supabaseAnonKey");

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)