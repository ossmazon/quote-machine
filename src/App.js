import React, { useEffect, useState } from "react";
import "./App.scss";

let quoteDbUrl =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState(
    "When one door of happiness closes, another opens, but ."
  );
  const [author, setAuthor] = useState("Charles Swindoll");
  const [quotesArr, setQuotesArray] = useState();

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parseJSON = await response.json();
    setQuotesArray(parseJSON.quotes);
  };

  useEffect(() => {
    fetchQuotes(quoteDbUrl);
  }, [quoteDbUrl]);

  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomQuote = () => {
    let rand = Math.floor(Math.random() * quotesArr.length);
    setRandomNumber(rand);
    setQuote(quotesArr[randomNumber].quote);
    setAuthor(quotesArr[randomNumber].author);
  };

  /*  const OurQuotesArr = [
    {
      quote: "When one door of happiness closes, another opens, but.",
      author: "Charles Swindoll",
    },
    { quote: "First, have a definite", author: "Me." },
    {
      quote: "When one door of happiness closes, another opens, but  asdasdas.",
      author: "Chasdasdarles Swindoll",
    },
    {
      quote: "When one door of happiness closes, asdasdasd.",
      author: "a",
    },
  ]; */

  return (
    <div className="App">
      <header className="App-header" id="text">
        <div id="quote-box">
          <div id="text">
           
            <p>"{quote}"</p>
            <p id="author">- {author}</p>
            <a
              id="tweet-quote"
              href={encodeURI(
                "http://www.twitter.com/intent/tweet?text=" +
                  quote +
                  " -" +
                  author
              )} target="_blank"
            >
              tweet quote
            </a>
            <button id="new-quote" onClick={() => generateRandomQuote()}>
              Generate a random number
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
