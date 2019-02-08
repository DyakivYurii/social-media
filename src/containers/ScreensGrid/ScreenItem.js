import React from 'react';

class ScreenItem extends React.Component {
  convertPosition(stringPosition) {
    const arr = stringPosition.split(' ');
    console.log(arr);
  }

  render() {
    const position = this.convertPosition(this.props.position);

    return (
      <React.Fragment>
        <p>this is fragment</p>
      </React.Fragment>
    );
  }
}

export default ScreenItem;
