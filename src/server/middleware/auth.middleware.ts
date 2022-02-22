import { Request, Response, NextFunction } from 'express';
import { verify as verifyJWT } from "jsonwebtoken";

export const injectUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const jwt = req.cookies.Authorization;
  const JWT_SECRET = process.env.JWT_SECRET;
  if (typeof jwt === "string") {
    try {
      const userInfo = verifyJWT(jwt, JWT_SECRET!);
      res.locals.user = userInfo;
      return next();
    } catch (err) {}
  }
};

export const protectedRouteMiddleware = (_: Request, res: Response, next: NextFunction) => {
  if (res.locals.user) {
    return next();
  }
  res.redirect("/login");
};
