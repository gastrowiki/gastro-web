import next from "next";
import { ErrorRequestHandler } from "express";
import { logger } from "./utils/logger";
import { createExpressServer } from "./createExpressServer";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });

const PORT = process.env.PORT || 5000;

nextApp
  .prepare()
  .then(() => {
    const app = createExpressServer(nextApp);

    // @ts-ignore: No overload matches this call
    app.listen(PORT, (err: Error) => {
      if (err) throw err;
      logger.info(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(
    (error): ErrorRequestHandler => {
      logger.error(error.stack);
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1);
    }
  );
