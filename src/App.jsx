import { useEffect, useState } from "react";
import "./App.css";
import quotes from "./assets/quotes.json";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  const changeColor = () => {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    setColor("rgb(" + a + "," + b + "," + c + ")");
  };

  const getQuote = () => {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote].quote);
    setAuthor(quotes[randomQuote].author);
    changeColor();
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div
      id="wrapper"
      style={{ backgroundColor: color }}
      className="flex items-center justify-center h-screen flex-col relative transition-colors"
    >
      <div
        id="quote-box"
        className="w-[550px] bg-white rounded-lg py-[40px] px-[50px] flex flex-shrink flex-col"
      >
        <div
          style={{ color: color }}
          id="text"
          className="text-center my-4 text-3xl font-normal"
        >
          {quote}
        </div>
        <div style={{ color: color }} id="author" className="text-end">
          {" "}
          - {author}
        </div>
        <div id="buttons" className="flex justify-between mt-6">
          <button
            style={{ backgroundColor: color }}
            className="rounded-lg text-white "
          >
            <a
              className="p-3"
              href={
                `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` +
                encodeURIComponent('"' + quote + '" ' + author)
              }
              target="_blank"
              id="tweet-quote"
            >
              Tweet
            </a>
          </button>
          <button
            id="new-quote"
            className="p-3 rounded-lg text-white"
            style={{ backgroundColor: color }}
            onClick={getQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="bg-inherit text-white text-sm font-light w-[450px] h-[15px] text-center mt-[15px] mx-[50px] mb-[30px]">
        <a href="https://github.com/AhmetFM">by ahmetfm</a>
      </div>
    </div>
  );
}

export default App;
