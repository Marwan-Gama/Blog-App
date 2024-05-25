const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config();

// Init the app
const app = express();

// Connection to the database
connectToDb();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} `
  );
});
