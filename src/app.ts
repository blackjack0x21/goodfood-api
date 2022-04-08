require("dotenv").config();
import express from "express";
import config from "config";
import { supabase } from "./utils/supabase";
import log from "./utils/logger";
import router from "./routes";
import swaggerDocs from "./utils/swagger";

const app = express();

app.use(express.json());

app.use(router);

const port: number = config.get("port");

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);

  swaggerDocs(app, port);

  supabase;
});
