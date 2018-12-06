import React, { Component } from 'react';
import './App.css';
import Stories from './Stories';
import FooterPage from './FooterPage';

class App extends Component {
  render() {
    return (
      <div>
        <Stories />
        <FooterPage />
      </div>
    );
  }
}

export default App;
