import React, { Component } from 'react';
import './App.css';

import UsersGrid from './containers/UsersGrid/UsersGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UsersGrid />
        </header>
      </div>
    );
  }
}

export default App;
