import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getRandomQuote() {
    let response = await fetch(
      "https://fatemrahimi-nodechallengquoteserver.glitch.me/quotes/random"
    );
    let body = await response.json();
    return body;
  }

  //console.log(getRandomQuote());
  async function handleClick() {
    let body = await getRandomQuote();
    setResult(body);
    setIsLoading(false);
  }
  //handleClick();

  return (
    <div className="App">
      <div className="quote-wrapper">
        {isLoading ? (
          <h2>
            Our lives begin to end the day we become silent about things that
            matter
          </h2>
        ) : (
          ""
        )}
        <h2>{result.quote}</h2>
        {isLoading ? <p>Matin Luther King Jr</p> : ""}
        <p>{result.author}</p>

        <div className="btn-container"></div>
      </div>
      <button onClick={handleClick}>change quote</button>
    </div>
  );
}

export default App;
