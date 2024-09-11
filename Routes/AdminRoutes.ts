import express, { Request, Response, NextFunction, Application } from "express";
import { createVendor } from "../Controllers";

const router: express.Router = express.Router();

router.post("/vendors", createVendor);

router.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.json({
    message: "Admin ",
  });
  next();
});

export { router as AdminRouter };
