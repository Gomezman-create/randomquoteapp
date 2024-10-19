import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Home.css";
import $ from "jquery";
const HomeQuote = ({ Quotes, initialQuoteAndAuthor }) => {
  // initial quote and author

  $("#text").text(initialQuoteAndAuthor?.quote);
  $("#author").text(initialQuoteAndAuthor?.author);

  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  //Hnadeling the new Quote
  const handelnewquote = () => {
    // geting random Number for the color and also for the random Quote
    let randomColor = Math.floor(Math.random() * colors.length);
    let reandonQuoteAndAuthor = Quotes[randomColor];

    // destructuring the qut and author
    let { quote, author } = reandonQuoteAndAuthor;

    // Ensure the DOM is fully loaded before running any jQuery code
    $(() => {
      //change the color of the  author and text
      $("#text, .quote_text:first-child, #author").css({
        color: colors[randomColor],
      });

      //animate opacity 0 to one
      $(".quote-text").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
      });

      //animate opacity 0 to one
      $(".quote-author").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
      });
      // chanage the background of the quote text
      $("body").css({
        background: colors[randomColor],
      });

      // chanage the background of the icons
      $("#new-quote, .icon_container i").css({
        background: colors[randomColor],
      });

      // update the text element withe the new author and quote
      $("#text").text(quote);
      $("#author").text(author);
    });
  };

  return (
    <main>
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote_text">
            <i className="fas fa-quote-left"> </i>
            <span id="text"></span>
          </div>

          <div className="quote_author">
            <span id="author"></span>
          </div>

          <div className="buttons">
            <div className="icon_container">
              <a
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_top"
                href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22The%20only%20person%20you%20are%20destined%20to%20become%20is%20the%20person%20you%20decide%20to%20be.%22%20Ralph%20Waldo%20Emerson"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="button"
                id="tumblr-quote"
                title="Post this quote on tumblr!"
                target="_blank"
                href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Ralph%20Waldo%20Emerson&amp;content=The%20only%20person%20you%20are%20destined%20to%20become%20is%20the%20person%20you%20decide%20to%20be.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
              >
                <i className="fab fa-tumblr"></i>
              </a>
            </div>
            <button id="new-quote" onClick={handelnewquote}>
              New Quote
            </button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </main>
  );
};

export default HomeQuote;
