export default (state = [], action) => {

  let idx;
  let quote;
  // establish the variables here

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
      // add in the quote 

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
      // return filtering out the quote with the id given 

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      return [ ...state.slice(0, idx), Object.assign({}, quote, { votes: quote.votes += 1}), ...state.slice(idx + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      // can't downvote a zero! do not forget!
      if (quote.votes > 0) { 
        return [ ...state.slice(0, idx), Object.assign({}, quote, { votes: quote.votes -= 1}), ...state.slice(idx + 1)]
      }
      return state;

    default: 
      return state;
  }
}
