const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  return response.json([{ name: "John" }, { name: "Tony" }]);
});

app.listen(3333, () => {
  console.log("Server is running");
});
