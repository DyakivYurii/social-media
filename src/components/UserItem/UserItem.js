import React from 'react';

import './UserItem.css';

class UserItem extends React.Component {
  constructor() {
    super();

    this.referenceUserItem = React.createRef();
  }

  componentDidMount() {
    this.setSizeForElement();
  }

  setSizeForElement() {
    const itemWidth = window.innerWidth / this.props.columnAmong;
    const itemHeight = window.innerHeight / this.props.rowAmong;

    this.referenceUserItem.current.style.width = `${itemWidth}px`;
    this.referenceUserItem.current.style.height = `${itemHeight}px`;
  }

  render() {
    const { positions } = this.props;
    return (
      <React.Fragment>
        <div className="user-item" ref={this.referenceUserItem}>
          <p>
            This is User Item element {positions.row}, {positions.column}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default UserItem;
