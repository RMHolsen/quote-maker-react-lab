import React from 'react';

const QuoteCard = ({ quote, removeQuote, upvoteQuote, downvoteQuote }) =>
 // all the things we're passing into the quote card component in the Quotes container
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* BEGIN INSERT HERE */}
          <p>{quote.content}
          {/* Remember this comes from state from QuoteForm, so it's content and author as per the form fields */}</p>
          <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
          {/* END INSERT */}
        </blockquote>
      </div>
      <div className="float-right">
        {/* WE NEED CLICK METHODS FOR EACH BUTTON. Still hate all the single line ... whatevers. */}
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            // onclick for Upvote goes here
            onClick={() => upvoteQuote(quote.id)}
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            // onclick for Downvote goes here
            onClick={() => downvoteQuote(quote.id)}
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            // onclick for... something. goes here
            onClick={() => removeQuote(quote.id)}
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <div>Votes: {quote.votes}</div> 
      </div>
    </div>
  </div>;

export default QuoteCard;
