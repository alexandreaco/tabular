import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../../api.js';

class Tab extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="tab">
        <pre className="tab__content">
          <h1>{ API[0].title }</h1>
          { API[0].tabs }
        </pre>
      </div>
    )
  }
}

export default Tab;
