const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");
const newQuoteButton = document.querySelector("#new-quote");

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteElement.textContent = `"${data.content}"`;
      authorElement.textContent = `- ${data.author}`;
    })
    .catch((error) => console.log(error));
}

newQuoteButton.addEventListener("click", getQuote);

getQuote();
