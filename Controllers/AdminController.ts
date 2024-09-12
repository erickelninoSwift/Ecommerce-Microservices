import { Request, Response, NextFunction } from "express";
import { ICreateVendors } from "../Dto";

export const createVendor = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const {
    name,
    ownerName,
    foodType,
    pinCode,
    address,
    phone,
    email,
    password,
  } = <ICreateVendors>request.body;

  console.log("hello all vendor are created here ");
  response.json({
    message: "all vendor are created here",
  });
  next();
};

export const getVendors = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

export const getOneVendor = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};
