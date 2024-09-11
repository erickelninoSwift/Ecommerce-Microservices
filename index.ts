import express from "express";
import { AdminRouter, VendorRouter } from "./Routes";

const app: express.Application = express();

app.use("/admin", AdminRouter);
app.use("/vendor", VendorRouter);

app.listen(8081, () => {
  console.clear();
  console.log("your app is running on port 8081");
});
