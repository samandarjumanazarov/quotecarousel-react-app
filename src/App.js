import { useState } from "react";

const quotes = [
  "The only way to save your yourself and your family, is taking massive responsiblity 😎",
  "You are relaxing on the beach with your friends while your mom is working at her  50s, then you are not a MAN",
  "Lead your life, otherwise your life will lead you",
  "Social media is giving you cheap dopamine and so, why not to delete all your social media accounts?",
];

function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === quotes.length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? quotes.length - 1 : current - 1);
  }
  return (
    <>
      <h2 className="header">Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          &larr;
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          &rarr;
        </div>
        {quotes.map(
          (qoute, index) =>
            current === index && (
              <div key={qoute} className="slide">
                {qoute}
              </div>
            )
        )}
      </div>
    </>
  );
}

export default App;
