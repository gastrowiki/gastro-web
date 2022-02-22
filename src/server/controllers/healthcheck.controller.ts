import { Request, Response } from 'express';
import fs from "fs";
import path from "path";
import getConfig from "next/config";

// Returns the server's "birthtime"
function getBirthTime() {
  try {
    const dirPath = path.join(__dirname);
    const filePath = path.join(__dirname, __filename);

    if (fs.existsSync(filePath)) {
      return fs.statSync(filePath).birthtime;
    }

    return fs.statSync(dirPath).birthtime;
  } catch {
    return null;
  }
}

/**
 * [healthcheckController]
 * Implements the /healthcheck route (used by goatbot to verify that a container is alive.)
 * If this route does not respond, goatbot will restart the container.
 */
export function healthcheckController(req: Request, res: Response) {
  const {
    serverRuntimeConfig: { GIT_SHA },
  } = getConfig();

  return res.send({
    ts: `${Date.now()}`,
    ip: req.ip,
    ips: req.ips,
    tag: GIT_SHA,
    created_at: getBirthTime(),
  });
}
