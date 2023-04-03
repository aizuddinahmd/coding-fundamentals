const main = document.getElementById("main__container");
const exchangerContainer = document.getElementById(
  "currency__exchanger__container"
);
const currencyInput = document.getElementById("currency__input");
const convertButton = document.getElementById("convert__button");
const resetButton = document.getElementById("reset__button");
const exchangerOutput = document.getElementById("exchanger__output");
const exchangerAmount = document.getElementById("exchanger__amount");
const flagContainer = document.getElementById("flag__container");
const toCurrency = document.getElementById("to__currency");
const fromCurrency = document.getElementById("from__currency");

let resultFrom = "";
let resultTo = "";
var amount;

const countryCodes = {
  MYR: "my",
  USD: "us",
  KRW: "kr",
  AUD: "au",
  GBP: "gb",
  JPY: "jp",
  EUR: "fr",
};

const currencySymbols = {
  MYR: "RM",
  USD: "$",
  KRW: "₩",
  AUD: "$",
  GBP: "£",
  JPY: "¥",
  EUR: "€",
};

const BASE__URL = "https://api.exchangerate-api.com/v4/latest/USD";

fromCurrency.addEventListener("change", (e) => {
  displayExchanger(e);
});

const displayExchanger = (e) => {
  resultFrom = `${e.target.value}`;
  let countryCode = countryCodes[resultFrom];
  console.log(countryCode);
  main.classList.add("hide");
  exchangerContainer.classList.remove("hide");
  flagContainer.innerHTML = `<img src="https://flagcdn.com/40x30/${countryCode}.png" class="country__container"/>`;
};

toCurrency.addEventListener("change", (e) => {
  resultTo = `${e.target.value}`;
});

currencyInput.addEventListener("input", (e) => {
  exchangerOutput.innerHTML = "";
  updateAmount(e);
});

const updateAmount = (e) => {
  amount = e.target.value;
};

convertButton.addEventListener("click", () => {
  if (amount > 0) {
    getAmount();
  } else {
    exchangerOutput.innerHTML = `<p>Please fill out the amount</p>`;
  }
});

const getAmount = async () => {
  const data = await fetch(`${BASE__URL}`);
  const currency = await data.json();

  displayResults(currency);
};

const displayResults = (currency) => {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  console.log(amount);
  let finalAmount = ((toRate / fromRate) * amount).toFixed(2);
  let currencySymbol = currencySymbols[resultTo];
  exchangerOutput.innerHTML += `<div class="exchanger__output">
  <p>${resultTo}</p>
  <p>${currencySymbol}${finalAmount}</p>
  </div>
`;
};

resetButton.addEventListener("click", () => {
  main.classList.remove("hide");
  exchangerContainer.classList.add("hide");
  resultFrom = "";
  exchangerOutput.innerHTML = "";
  currencyInput.value = 0;
  amount = 0;
});
