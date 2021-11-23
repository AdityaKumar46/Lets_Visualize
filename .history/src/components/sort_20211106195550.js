import "./Sort.css";
import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Slider from 'react-rangeslider'

export default function Sort() {
    const ANIMATION_SPEED_MS = 1;

    const NUMBER_OF_ARRAY_BARS = 100;
    const PRIMARY_COLOR = 'turquoise';
    const SECONDARY_COLOR = 'red';

    const [arr1, setArr1] = React.useState([]);
    const [value, setValue] = useState([0, 100])
    useEffect(() => {
        resetArray();
    }, [])

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(0, 500));
        }
        console.log(arr1.length)
        setArr1(array);
    }

    const handleChange = (value) => {
        this.setState({
          value: value
        })
      }
    
      const handleChangeReverse = (value) => {
        this.setState({
          reverseValue: value
        })
      }

    return (
        <>

            <div className="array-container">
                <div className='slider orientation-reversed'>
                    <div className='slider-group'>
                        <div className='slider-horizontal'>
                            <Slider
                                min={0}
                                max={100}
                                value={value}
                                orientation='horizontal'
                                onChange={handleChange}
                            />
                            <div className='value'>{value}</div>
                        </div>
                        <div className='slider-horizontal'>
                            <Slider
                                min={0}
                                max={10}
                                value={value}
                                orientation='horizontal'
                                onChange={this.handleChangeReverse}
                            />
                            <div className='value'>{value}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="array-container">
                <div className="press">
                    <button className="btn btn-primary" onClick={() => resetArray()}>Generate New Array</button>
                </div>
            </div>
            <div>
                <Bar myArray={arr1} />
            </div>

        </>
    );
}