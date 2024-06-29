const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.sendFile("/home/booby/Desktop/quadbtech-backend-assignment/index.html");
  // fetch("https://api.wazirx.com/api/v2/tickers")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
