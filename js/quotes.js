const quotes = [
  {
    quote: "It alwats seems impossible until its done",
    author: "Nelson Mandela",
  },
  {
    quote: "Your only limit is your soul",
    author: "Ratatouille",
  },
  {
    quote: "There are better starters than me but I’m a strong finisher",
    author: "Usain Bolt",
  },
  {
    quote: "Tough times never last, but tough people do",
    author: "Robert H. Schuller",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote: "In order to succeed, we must first believe that we can",
    author: "Nikos Kazantzakis",
  },
  {
    quote: "If you run you stand a chance of losing, but if you don't run you've already lost",
    author: "Barack Obama",
  },
  {
    quote: "To create more positive results in your life, replace 'if only' with 'next time'",
    author: "Unknown",
  },
  {
    quote: "Only i can change my life. No one can do it for me",
    author: "Carol Burnett",
  },
  {
    quote: "When in doubt, choose change",
    author: "Lily Leung",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function init() {
  quote.innerText = todaysQuote.quote;
  author.innerText = `- ${todaysQuote.author}`;
}
init();
