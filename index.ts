import express from "express";

const app: express.Application = express();

app.get("/", (request: express.Request, response: express.Response) => {
  return response.json({
    message: "Hello everyone how are you doing today",
  });
});

app.listen(3000, () => {
  console.log("your app is running on port 3000");
});
