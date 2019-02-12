import React from 'react';

class GridItem extends React.Component {
  setTopPosition() {
    const rowPosition = this.props.rowIndex * 100;
    return `${rowPosition}px`;
  }

  setLeftPosition() {
    const columnPosition = this.props.columnIndex * 100;
    return `${columnPosition}px`;
  }

  render() {
    return (
      <div
        className="grid-item"
        style={{ top: this.setTopPosition(), left: this.setLeftPosition() }}
      >
        <p>{`${this.props.rowIndex}, ${this.props.columnIndex}`}</p>
      </div>
    );
  }
}

export default GridItem;
