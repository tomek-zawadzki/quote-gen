const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");
const btn = document.querySelector(".btn");

const quotes = [
  {
    text: "I do the very best I know how - the very best I can: and I mean to keep on doing so until the end.",
    author: "ABRAHAM LINCOLN",
  },
  {
    text: "To, że milczę, nie znaczy, że nie mam nic do powiedzenia.",
    author: "Jonathan Carroll",
  },
  {
    text: "Życie jest wspaniałe, należy tylko spoglądać na nie przez właściwe okulary",
    author: "Alexandre Dumas",
  },
  {
    text: "Nieważne, skąd pochodzisz. Ważne, dokąd zmierzasz.",
    author: "Brian Tracy",
  },
  {
    text: "By wygrywać, muszę umieć podjąć decyzję w ułamku sekundy, a potem muszę umieć sobie poradzić z jej konsekwencjami.",
    author: "Jelena Diemientiewa",
  },
  {
    text: "Co skraca mi czas? – Działanie! Co wydłuża go niemiłosiernie? – Bezczynność!",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Nie przepracowałem ani jednego dnia w swoim życiu. Wszystko, co robiłem, to była przyjemność. ",
    author: "Thomas Edison",
  },
  {
    text: "W dwa miesiące możesz zdobyć więcej przyjaciół, interesując się innymi ludźmi, niż w ciągu dwóch lat, usiłując zainteresować sobą innych. ",
    author: "Dale Carnegie",
  },
];

function changeQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[random].text;
  quoteAuthor.innerText = quotes[random].author;
}

btn.addEventListener("click", changeQuote);
