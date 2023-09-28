import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('loading');
  const [author, setAuthor] = useState('');

  const quotesData = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
  ];

  const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const randomQuote = quotesData[randomIndex];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  useEffect(() => {
    displayRandomQuote();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  const handleNewQuoteClick = () => {
    displayRandomQuote();
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <div id="quote">
        {quote}
      </div>
      <div id="author">
        - {author}
      </div>
      <button
        id="new-quote"
        onClick={handleNewQuoteClick}
      >
        Surprise Me
      </button>
    </div>
  );
};

export default QuoteGenerator;
