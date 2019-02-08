import React from 'react';

import GridItem from '../../components/UsersGrid/GridItem';

import './UsersGrid.css';

// For testing
import users from '../../constants/config';

class UsersGrig extends React.Component {
    constructor(props) {        
        super(props);

        this.referenceGrid = React.createRef();
        this.state = {}
        this.matrixGridScreen = [];

        this.calculateGridPosition(2);
    }

    componentDidMount() {
        window.addEventListener('resize', this.getScreenSize);
        // this.referenceGrid.current.addEventListener('resize', this.getScreenSize);
    }

    componentWillUnmount() {
        // this.referenceGrid.current.removeEventListener(this.getScreenSize);
        window.removeEventListener(this.getScreenSize);
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

    getScreenSize() {
        console.log(`We have resized screen`);
        console.log(`This is referenced element`, this.referenceGrid);
        return { height: window.innerHeight, width: window.innerWidth };
    }

    render() {
        return <div ref={this.referenceGrid} className='grid-container'>
                {/* { this.buildGrid() } */}
            </div>
    }
}

export default UsersGrig;