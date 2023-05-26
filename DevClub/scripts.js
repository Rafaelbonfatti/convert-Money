const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyVlaueToConvert = document.querySelector(".currency-value-to-convert"); // *!Valor em Real
  const currencyVlaueConverted = document.querySelector(".currency-value"); // *Outras moedas

  

  console.log(currencySelect.value);
  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 6.2;
  const bitcoinToday = 133.869;

  if (currencySelect.value == "dolar") {
    //* Se o select estiver selecionado o valor de dolar, entre aqui
    currencyVlaueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    //* Se o select estiver selecionado o valor de euro, entre aqui
    currencyVlaueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyVlaueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if(currencySelect.value == "bitcoin"){
    currencyVlaueConverted.innerHTML = new Intl.NumberFormat("en-sv", {
        style: "currency",
        currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday)
  }

  currencyVlaueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dólar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

}

currencySelect.addEventListener("change", changeCurrency); // *Trocar de Valor
convertButton.addEventListener("click", convertValues);
