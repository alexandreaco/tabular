import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tab extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="tab">
        <pre className="tab__content">
          <h2>I'm the Tab Area</h2>
        </pre>
      </div>
    )
  }
}

export default Tab;
