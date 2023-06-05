const express = require("express");
const { db } = require("./config/db");
const cors = require("cors");
const { countryRoutes } = require("./routes/countryRoutes");
const { bookRoutes } = require("./routes/bookRoutes");
const { writerRoutes } = require("./routes/writerRoutes");
const app = express();
const fileUpload = require("express-fileupload");

app.use(fileUpload());

require("dotenv").config();

app.use(express.static("bookImages"));

db.connect();

app.use(express.json());
app.use(cors());

app.use("/api/countries", countryRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/writers", writerRoutes);

app.listen(3300, () => {
  console.log("Express is running...");
});
