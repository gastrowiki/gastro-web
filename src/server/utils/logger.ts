import pino from "pino";
import PinoHttp from "pino-http";

export const logger: pino.Logger = pino({
  redact: {
    // Remove CSP headers from logging output (to reduce noise)
    paths: ['res.headers["content-security-policy"]'],
    censor: "**removed**",
  },
});

export const expressLogger = PinoHttp({ logger });
