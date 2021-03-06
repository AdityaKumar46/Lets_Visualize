import React from 'react'
import "./Sort.css"

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 30;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export class Sort extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
        {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array})
    }

    render() {

        const {array} = this.state;

        return (
          
            <>
                <div className="array-container">
                  <div className="press">
                    <button className="btn btn-primary" 
                    onClick={() => this.resetArray()}>Generate New Array</button>
                  </div>
    
                </div>
                <div className="array-container">
                  {array.map((value, idx) => (
                  <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                  </div>
                  ))}
                  </div>

           </>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


export default Sort;