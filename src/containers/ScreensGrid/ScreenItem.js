import React from 'react';

import './ScreenItem.css';

class ScreenItem extends React.Component {
  constructor() {
    super();
    this.referenceCurrentScreen = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.getUserScreenSize);
    this.initializeScreenProperties();
  }

  componentWillUnmount() {
    window.removeEventListener(this.getScreenSize);
  }

  initializeScreenProperties() {
    const initialUserScreenSize = this.getUserScreenSize();
    this.setPropertiesScreenSize(initialUserScreenSize);
    this.setPropertiesScreenPosition(this.props.positions, initialUserScreenSize);
  }

  getUserScreenSize() {
    return { height: window.innerHeight, width: window.innerWidth };
  }

  setPropertiesScreenSize({ height, width }) {
    if (this.referenceCurrentScreen) {
      this.referenceCurrentScreen.current.style.height = `${height}px`;
      this.referenceCurrentScreen.current.style.width = `${width}px`;
    } else {
      console.error(`we don't have reference`);
    }
  }

  setPropertiesScreenPosition({ row, column }, { height, width }) {
    console.log(`we have row ${row} and column ${column}, height: ${height} width: ${width} `);
    console.log(`position should be : ${row * height}, ${column * width}`);
    if (this.referenceCurrentScreen) {
      this.referenceCurrentScreen.current.style.top = `${height * row}px`;
      this.referenceCurrentScreen.current.style.left = `${width * column}px`;
    } else {
      console.error(`we don't have reference`);
    }
  }

  render() {
    return (
      <section className="screen--item" ref={this.referenceCurrentScreen}>
        <p style={{ margin: `0px`, padding: '0px' }}>{`${this.props.positions.row} ${
          this.props.positions.column
        }`}</p>
      </section>
    );
  }
}

export default ScreenItem;
