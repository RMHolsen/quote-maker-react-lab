import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const quote = {...this.state, id: uuid() };
    // Pass quote object to action creator
    this.props.addQuote(quote);
    // Meaning you now need a function of addQuote in the props passed to wherever quote form is. container?
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      // WHAT THE HELL IS ALL OF THIS CRAP THIS IS UGLY AS HELL. AUGH.
      // HOW AM I SUPPOSED TO FIND ANYTHING IN THIS
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      {/* I HATE EVERYTHING this is the text area to submit a quote*/}
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      {/* STILL UGLY DOGSHITCODE AUGH anyway this is where the author's name goes */}
                      {/*  DO NOT FORGET THE NAME="NAME" THING*/}
                      <input
                        className="form-control"
                        name="author"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
// we're just passing dispatch to do the action, not displaying the state, so no state only
export default connect(null, { addQuote })(QuoteForm);
