import mongoose, { Document, SchemaType } from "mongoose";

export interface IVendorsDatabase {
  name: string;
  ownerName: string;
  foodType: string[];
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailability: boolean;
  coverImages: [string];
  rating: number;
  //   foods: any;
}

const vendorsSchema = new mongoose.Schema<IVendorsDatabase>(
  {
    name: {
      type: String,
    },
    ownerName: {
      type: String,
    },
    foodType: {
      type: [String],
    },
    pinCode: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    salt: { type: String },
    serviceAvailability: { type: Boolean },
    coverImages: { type: [String] },
    rating: { type: Number },
    //   foods: [
    //     {
    //       type: mongoose.Types.ObjectId,
    //       ref: "food",
    //     },
    //   ],
  },
  {
    toJSON: {
      transform(doc, ret, options) {
        delete ret.password,
          delete ret.salt,
          delete ret.createdAt,
          delete ret.updatedAt,
          delete ret.__v;
      },
    },
  }
);

export const Vendors = mongoose.model("vandors", vendorsSchema);
