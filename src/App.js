import React, { Component } from 'react';

import ScreensGrid from './containers/ScreensGrid/ScreensGrid';
import UsersGrid from './containers/UsersGrid/UsersGrid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScreensGrid />
      </div>
    );
  }
}

export default App;
