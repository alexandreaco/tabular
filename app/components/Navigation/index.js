import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from '../../api.js';

class Navigation extends Component {

  constructor() {
    super();
  }

  renderLinks() {
    return API.map(song => {
      return (
        <li className="navigation__link">{ song.title }</li>
      );
    });
  }

  render() {
    return (
      <div className="navigation">
        <ul className="navigation__links">
          { this.renderLinks() }
        </ul>
      </div>
    )
  }
}

export default Navigation;
