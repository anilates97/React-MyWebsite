const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("server is running");
});

app.listen(process.env.PORT, () =>
  console.log("Server started on port", process.env.PORT)
);
