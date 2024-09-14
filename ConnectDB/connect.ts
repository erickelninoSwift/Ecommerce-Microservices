import mongoose from "mongoose";
import { mongoDBURI } from "../Config";
export const handleConnection = (): any => {
  mongoose
    .connect(mongoDBURI)
    .then(() => {
      console.log("you are connected with success to DB");
    })
    .catch((error) => {
      console.log(`Error was found while connecting : ${error}`);
    });
};
