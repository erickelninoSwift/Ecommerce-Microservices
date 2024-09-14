import express from "express";
import { AdminRouter, VendorRouter } from "./Routes";
import bodyParser from "body-parser";
import { handleConnection } from "./ConnectDB/connect";
const app: express.Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", AdminRouter);
app.use("/vendor", VendorRouter);

app.listen(8081, () => {
  console.log("your app is running on port 8081");
  handleConnection();
});
