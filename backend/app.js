const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config();
const logger = require("./middlewares/logger");

// Connection to the database
connectToDb();

// Init the app
const app = express();

// Apply Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

// Routes
app.use("/api/auth", require("./routes/authRoute"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} `
  );
});
