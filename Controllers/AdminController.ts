import { Request, Response, NextFunction } from "express";
import { ICreateVendors } from "../Dto";
import { Vendors, IVendorsDatabase } from "../Models";
import bcrypt from "bcrypt";

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

  //generate the Salt
  const salt = bcrypt.genSaltSync(10);

  // =====

  const dataPosted: IVendorsDatabase = {
    name,
    ownerName,
    foodType,
    pinCode,
    address,
    phone,
    email,
    password: bcrypt.hashSync(password, salt),
    salt: salt,
    serviceAvailability: false,
    coverImages: [""],
    rating: 0,
  };
  const findVendorExist = await Vendors.findOne({ email: email });

  if (findVendorExist !== null) {
    return response.status(203).json({
      message: "Vendor with this ID exist already in the database",
    });
  }
  let addVendor = await Vendors.create(dataPosted);

  if (addVendor) {
    return response.status(200).json({
      vendor: addVendor,
    });
  }
  response.json({
    error: "vendor not registerd",
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
