import React from 'react';

import UserItem from '../../components/UserItem/UserItem';

class UsersGrid extends React.Component {
  constructor() {
    super();

    this.state = {
      usersCoordinations: [],
      rowAmong: 0,
      columnAmong: 0
    };
  }

  // Here is potenthial place for optimization
  // Maybe we can pass numbers of rows using some global variables or somethin like that
  componentDidMount() {
    if (window.innerWidth >= 992) {
      this.buildGreed(3, 4);
      this.setState({ rowAmong: 3, columnAmong: 4 });
    } else {
      this.buildGreed(3, 3);
      this.setState({ rowAmong: 3, columnAmong: 3 });
    }
  }

  buildGreed(row, column) {
    // const screenHeight = window.innerHeight;
    // const screenWidth = window.innerWidth;

    let usersCoordinates = [];

    for (let currentRow = 0; currentRow < row; currentRow++) {
      let rowUsersGrid = [];
      for (let currentColumn = 0; currentColumn < column; currentColumn++) {
        rowUsersGrid.push({ row: currentRow, column: currentColumn });
      }
      usersCoordinates.push(rowUsersGrid);
    }

    this.setState({ usersCoordinations: usersCoordinates });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.usersCoordinations.map((currentRow) => {
          return currentRow.map((currentUser) => {
            return (
              <UserItem
                key={`${currentUser.row}${currentUser.column}`}
                positions={currentUser}
                rowAmong={this.state.rowAmong}
                columnAmong={this.state.columnAmong}
              />
            );
          });
        })}
      </React.Fragment>
    );
  }
}

export default UsersGrid;
