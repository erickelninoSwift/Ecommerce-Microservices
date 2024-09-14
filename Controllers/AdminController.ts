import { Request, Response, NextFunction } from "express";
import { ICreateVendors } from "../Dto";
import { Vendors, IVendorsDatabase } from "../Models";
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

  const dataPosted: IVendorsDatabase = {
    name,
    ownerName,
    foodType,
    pinCode,
    address,
    phone,
    email,
    password,
    salt: "",
    serviceAvailability: false,
    coverImages: [""],
    rating: 0,
  };
  const addVendor = await Vendors.create(dataPosted);

  if (addVendor) {
    return response.status(200).json({
      vendor: addVendor,
    });
  }
  response.json({
    error: "vendor could not be added",
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
