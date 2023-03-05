const { chromium } = require("playwright");
const axios = require("axios");
async function checkUsd() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.bcv.org.ve/");

  const usd = await page.locator("#dolar strong").textContent();

  await browser.close();
  return parseFloat(usd.slice(1, 6).replace(",", "."));
}

async function checkUSDT() {
  const USDT_PRICES = axios
    .get("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD,EUR")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return USDT_PRICES;
}

module.exports = {
  checkUsd,
  checkUSDT,
};
