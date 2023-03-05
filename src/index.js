const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
const bodyParser = require("body-parser");
const CurrencyRoutes = require("./routes/CurrencyRoutes");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", CurrencyRoutes);

app.listen(PORT, () => {
  console.log(`🚀Server listening on port ${PORT}`);
});
