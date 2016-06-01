import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Navigation extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="navigation">
        <ul className="navigation__links">
          <li className="navigation__link">Song Title</li>
          <li className="navigation__link">Song Title</li>
          <li className="navigation__link">Song Title</li>
          <li className="navigation__link">Song Title</li>
          <li className="navigation__link">Song Title</li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
