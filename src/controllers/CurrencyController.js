//Service
const { uuid } = require("uuidv4");
const checkCurrenciesService = require("../services/checkCurrenciesService");

const getAllCurrencies = async (req, res) => {
  const USD_VES = await checkCurrenciesService.checkUsd();
  const currency_usdt = await checkCurrenciesService.checkUSDT();
  res.send({
    ok: true,
    data: {
      USDT: currency_usdt.USD,
      EUR: currency_usdt.EUR,
      USD_BCV: USD_VES,
    },
  });
};

module.exports = {
  getAllCurrencies,
};
