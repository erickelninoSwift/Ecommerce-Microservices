import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.json({
    message: "Vendor ",
  });

  next();
});

export { router as VendorRouter };
