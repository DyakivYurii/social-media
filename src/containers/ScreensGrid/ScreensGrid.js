import React from 'react';

import ScreenItem from './ScreenItem';

import './ScreensGrid.css';

class ScreensGrid extends React.Component {
  constructor() {
    super();

    this.referenseScreenGrid = React.createRef();

    this.state = { screensCoordinates: [] };
  }

  componentDidMount() {
    this.calculateScreensCoordinates(2);
  }

  calculateScreensCoordinates(cashingLevel = 1) {
    if (cashingLevel <= 0) {
      cashingLevel = 1;
    }

    const screensCoordinates = [];

    for (let row = -cashingLevel; row <= cashingLevel; row++) {
      const rowOfScreensCoordinates = [];
      for (let column = -cashingLevel; column <= cashingLevel; column++) {
        rowOfScreensCoordinates.push(`${row} ${column}`);
      }
      screensCoordinates.push(rowOfScreensCoordinates);
    }

    this.setState({ screensCoordinates });
  }

  setScreenSize() {}

  setScreenToHisPosition() {}

  render() {
    console.log(this.state);
    console.log(this.referenseScreenGrid);
    return (
      <React.Fragment>
        <section ref={this.referenseScreenGrid} className="screen-grid">
          {this.state.screensCoordinates.map((currentRow) => {
            return currentRow.map((currentScreen) => {
              return (
                <ScreenItem key={currentScreen} position={currentScreen} />
              );
            });
          })}
        </section>
        {/* <ScreenItem /> */}
      </React.Fragment>
    );
  }
}

export default ScreensGrid;
