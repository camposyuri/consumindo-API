const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    // response é a resposta do axios MAS eu tiro o data de dentro do response
    // EX: console.log(response.data);
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    return res.json(data);
  } catch (error) {
    console.log(error);
  }
  // return res.json([{ name: "John" }, { name: "Tony" }]);
});

app.listen(3333, () => {
  console.log("Server is running");
});
