import cookieParser from 'cookie-parser';
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";

import {
  contentSecurityPolicyMiddleware,
  injectUserMiddleware,
  protectedRouteMiddleware,
} from "./middleware";
import { expressLogger } from "./utils/logger";
import { healthcheckController } from "./controllers/healthcheck.controller";

export function createExpressServer(nextApp: any) {
  const handle = nextApp.getRequestHandler();

  const app = express();

  app.use(bodyParser.json(), compression(), cookieParser(), injectUserMiddleware);

  if (process.env.NODE_ENV !== "development") {
    app.use(helmet());
    app.use(expressLogger, contentSecurityPolicyMiddleware());
  }

  app.use('/profile', protectedRouteMiddleware)

  // Use Express.static (instead of Next) to serve static files from /public
  //app.use("/", express.static("public"));

  app.get("/healthcheck", healthcheckController);

  app.get("*", handle);

  return app;
}
