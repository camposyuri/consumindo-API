const express = require("express");
const app = express();

app.get("/", (request, response) => {
  return response.json({ messsage: "Okay" });
});

app.listen(3333, () => {
  console.log("Server is running");
});
