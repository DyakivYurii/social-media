import React, { Component } from 'react';
import './App.css';

import ScreensGrid from './containers/ScreensGrid/ScreensGrid';
import UsersGrid from './containers/UsersGrid/UsersGrid';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="App">
          <header className="App-header"><UsersGrid /></header>
        </div> */}
        <ScreensGrid />
      </React.Fragment>
    );
  }
}

export default App;
