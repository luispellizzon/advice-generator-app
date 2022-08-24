const quoteId = document.querySelector("#advice-id");
const quote = document.getElementById("advice-quote");
const btn = document.querySelector("#dice-button");
const dice = document.getElementsByTagName("img")[1];

btn.addEventListener("click", async function () {
  dice.style.animation = "roll 1s forwards";

  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const { id, advice } = data.slip;

  quote.classList.add("fade-in");

  quote.innerText = `${advice}`;
  quoteId.innerText = id;

  setTimeout(function () {
    dice.style.animation = "";
    quote.classList.remove("fade-in");
  }, 1000);
});
