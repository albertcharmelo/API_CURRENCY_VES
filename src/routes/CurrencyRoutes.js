const express = require("express");
const router = express.Router();
const currencyController = require("../controllers/CurrencyController");

router.post("/getCurrencyBalance", currencyController.getAllCurrencies);

module.exports = router;
