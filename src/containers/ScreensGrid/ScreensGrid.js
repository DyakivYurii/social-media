import React from 'react';

import ScreenItem from './ScreenItem';

import './ScreensGrid.css';

class ScreensGrid extends React.Component {
  constructor() {
    super();

    this.referenseScreenGrid = React.createRef();

    this.state = {
      screensCoordinates: [],
      mouseClickeds: false,
      mousesClicedPositionX: 0,
      mousesClicedPositionY: 0,
      gridPositionX: 0,
      gridPositionY: 0
    };
  }

  componentDidMount() {
    this.calculateScreensCoordinates(2);
    this.setScreenSize();
    this.referenseScreenGrid.current.addEventListener('mousedown', this.listenMouseDown);
    this.referenseScreenGrid.current.addEventListener('mouseup', this.listenMouseUp);
    this.referenseScreenGrid.current.addEventListener('mousemove', this.listenMouseMove);
  }

  componentWillUnmount() {
    this.referenseScreenGrid.current.removeEventListener(this.listenMouseDown);
    this.referenseScreenGrid.current.removeEventListener(this.listenMouseUp);
    this.referenseScreenGrid.current.removeEventListener(this.listenMouseMove);
  }

  calculateScreensCoordinates(cashingLevel = 1) {
    if (cashingLevel <= 0) {
      cashingLevel = 1;
    }

    const screensCoordinates = [];

    for (let row = -cashingLevel; row <= cashingLevel; row++) {
      const rowOfScreensCoordinates = [];
      for (let column = -cashingLevel; column <= cashingLevel; column++) {
        rowOfScreensCoordinates.push({ row, column });
      }
      screensCoordinates.push(rowOfScreensCoordinates);
    }

    this.setState({ screensCoordinates });
  }

  listenMouseDown = (event) => {
    this.setState({
      mouseClickeds: true,
      mousesClicedPositionX: event.clientX,
      mousesClicedPositionY: event.clientY
    });
  };

  listenMouseUp = () => {
    this.setState({ mouseClickeds: false });
  };

  listenMouseMove = (event) => {
    if (this.state.mouseClickeds) {
      this.setState((state) => ({
        gridPositionX: state.gridPositionX - (state.mousesClicedPositionX - event.clientX),
        gridPositionY: state.gridPositionY - (state.mousesClicedPositionY - event.clientY),
        mousesClicedPositionX: event.clientX,
        mousesClicedPositionY: event.clientY
      }));
    }
  };

  // Here we should create system for resizing screens
  setScreenSize = () => {
    if (this.referenseScreenGrid.current) {
      this.referenseScreenGrid.current.style.height = `${window.innerHeight}px`;
      this.referenseScreenGrid.current.style.width = `${window.innerWidth}px`;
    }
  };

  setPropertieGreedPosition = () => {
    if (this.referenseScreenGrid.current) {
      this.referenseScreenGrid.current.style.top = `${this.state.gridPositionY}px`;
      this.referenseScreenGrid.current.style.left = `${this.state.gridPositionX}px`;
    }
  };

  render() {
    this.setPropertieGreedPosition();

    return (
      <React.Fragment>
        <section
          ref={this.referenseScreenGrid}
          className="screen-grid"
          style={{
            height: window.innerHeight,
            width: window.innerWidth,
            top: this.state.gridPositionY,
            left: this.state.gridPositionX
          }}
        >
          {this.state.screensCoordinates.map((currentRow) => {
            return currentRow.map((currentScreen) => {
              return (
                <ScreenItem
                  key={`${currentScreen.row}${currentScreen.column}`}
                  positions={currentScreen}
                />
              );
            });
          })}
          {/* <p>some texxt</p> */}
        </section>
      </React.Fragment>
    );
  }
}

export default ScreensGrid;
