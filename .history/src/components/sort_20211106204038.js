import "./Sort.css";
import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Sort() {
    //const ANIMATION_SPEED_MS = 1;
    const NUMBER_OF_ARRAY_BARS = 100;
   // const PRIMARY_COLOR = 'turquoise';
   // const SECONDARY_COLOR = 'red';

    const [arr1, setArr1] = React.useState([]);
    const [value, setValue] = useState(1)
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

    const onSliderChange = value => {
        setValue(value);
      };
    


    return (
        <>
            <div className="array-container">
                <div style={{width: 250, margin: 15 }}>
                    <h6>Generate array</h6>
                    <Slider
                        min={1}
                        max={100}
                        value={value}
                        onChange={onSliderChange}
                        railStyle={{
                            height: 2
                        }}
                        handleStyle={{
                            height: 20,
                            width: 20,
                            marginLeft: -9,
                            marginTop: -9,
                            backgroundColor: "blue",
                            border: 1
                        }}
                        trackStyle={{  
                            color: "black"
                        }}
                    />
                    <p style={{backgroundColor:"red", width: 20}}><strong>{value}</strong></p>
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