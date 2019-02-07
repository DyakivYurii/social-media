import React from 'react';

import GridItem from '../../components/UsersGrid/GridItem';

import './UsersGrid.css';

// For testing
import users from '../../constants/config';

class UsersGrig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.matrixGridScreen = [];

        this.calculateGridPosition(2);
    }

    calculateGridPosition(cashingLevel = 1) {
        if(cashingLevel < 1) { 
            cashingLevel = 1;
        }

        for (let rowIndex = -cashingLevel; rowIndex <= cashingLevel; rowIndex++) {
            const column = [];
            for (let columnIndex = -cashingLevel; columnIndex <= cashingLevel; columnIndex++) {
                column.push({rowIndex, columnIndex});
            }
            this.matrixGridScreen.push(column);
        }
    }

    buildGrid() {
        return this.matrixGridScreen.map(currentRow => {
            return currentRow.map(currentElement => {
                return <GridItem key={`${currentElement.rowIndex}${currentElement.columnIndex}`} rowIndex={currentElement.rowIndex} columnIndex={currentElement.columnIndex} />
            });
        });
    }

    buildIconGrid

    render() {
        return <div className='grid-container'>
                {/* { this.buildGrid() } */}
            </div>
    }
}

export default UsersGrig;