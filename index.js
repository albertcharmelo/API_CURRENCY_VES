const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
const bodyParser = require("body-parser");
const CurrencyRoutes = require("./src/routes/CurrencyRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", CurrencyRoutes);

app.listen(PORT, () => {
  console.log(`🚀Server listening on port ${PORT}`);
});
