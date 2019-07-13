const express = require("express");
const axios = require("axios");
const app = express();
const port = 1234;

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/logos", (req, res) => {
  axios
    .get("http://backend:1337/logos")
    .then(response => res.json(response.data))
    .catch(error => res.send(error));
});

app.listen(port, () => console.log(`Brdge listening on port ${port}!`));
