import express from "express";
import { AdminRouter, VendorRouter } from "./Routes";

const app: express.Application = express();

// app.get("/", (request: express.Request, response: express.Response) => {
//   return response.json({
//     message: "Hello everyone how are you doing today",
//   });
// });

app.use("/admin", AdminRouter);
app.use("/vendor", VendorRouter);

app.listen(8080, () => {
  console.log("your app is running on port 3000");
});
