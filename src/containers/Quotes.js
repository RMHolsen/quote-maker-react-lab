import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    // hey, this is where those get imported to!
    // this goes INSIDE the render

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}
              {/* So, here we're rendering the quote card with each quote in it (quote={quote}
                and that goes into quoteCard.js where upvoteQuote, downvoteQuote, and removeQuote are all passed to each button */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
// now we're rendering a state, so we do need map state to props

const mapStateToProps = (state) => {
  return ({
    quotes: state.quotes 
  })
}
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
