import React, { Component } from 'react';
import Navigation from '../Navigation';
import Tab from '../Tab';
import Footer from '../Footer';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <Tab />
        <Footer />
      </div>
    )
  }
}

export default App;
