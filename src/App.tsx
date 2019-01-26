import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Welcome to Kinky Book Club Sydney!</h1>
        <hr />
        <div className="container">
          <div className="entry">
            <h2>First meeting</h2>
            <h5>10th of March 2019</h5>
            <p>Loving Dominant by John and Libby Warren.<br />
              <a href="https://fetlife.com/events/755120">Fetlife Event</a>
            </p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
