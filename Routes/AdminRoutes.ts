import express, { Request, Response, NextFunction, Application } from "express";
import { createVendor, getVendors, getOneVendor } from "../Controllers";

const router: express.Router = express.Router();

router.post("/vendors", createVendor);
router.get("vendors", getVendors);
router.get("/vendors/:id", getOneVendor);

export { router as AdminRouter };
