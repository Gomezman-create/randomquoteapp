import React, { useEffect, useState } from "react";
import $ from "jquery";
import HomeQuote from "../pages/HomeQuote";
console.log($);
const FetchdatawithJquerry = () => {
  const [quotes, setQuotes] = useState([]);
  let initialQuoteAndAuthor = quotes[Math.floor(Math.random() * quotes.length)];
  try {
    // fetch the quotes
    useEffect(() => {
      $.ajax({
        url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        method: "GET",
        dataType: "json",
        success: (response) => {
          //   console.log(response);
          setQuotes(response.quotes);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <HomeQuote
        Quotes={quotes}
        initialQuoteAndAuthor={initialQuoteAndAuthor}
      />
    </>
  );
};

export default FetchdatawithJquerry;
