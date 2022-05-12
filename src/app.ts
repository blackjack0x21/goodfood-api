require("dotenv").config();
var cors=require('cors');
import express from "express";
import config from "config";
import { supabase } from "./utils/supabase";
import log from "./utils/logger";
import router from "./routes";
import swaggerDocs from "./utils/swagger";

const app = express();

app.use(express.json());

app.use(cors({origin:true,credentials: true}));

app.use(router);

const port: number = config.get("port");

app.listen(port || process.env.PORT, () => {
  if(process.env.NODE_ENV === "local-dev" || "hosted-dev") {
    log.info(`App started at http://localhost:${port} on ENV = ${process.env.NODE_ENV}`);
  }

  if(process.env.NODE_ENV === "staging") {
    log.info(`App started on https://goodfood-staging-api.herokuapp.com:${port} on ENV = ${process.env.NODE_ENV}`);
  }

  if(process.env.NODE_ENV === "production") {
    log.info(`App started on https://goodfood-api.herokuapp.com:${port} on ENV = ${process.env.NODE_ENV}`);
  }

  swaggerDocs(app, port);

  supabase;
});