import "./Sort.css";
import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Sort() {
    const ANIMATION_SPEED_MS = 1;

    const NUMBER_OF_ARRAY_BARS = 100;
    const PRIMARY_COLOR = 'turquoise';
    const SECONDARY_COLOR = 'red';

    const [arr1, setArr1] = React.useState([]);
    const [value, setValue] = useState(0)
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
        setValue(
          {
            value
          },
          () => {
            console.log(value);
          }
        );
      };
    


    return (
        <>
            <div className="array-container">
                <div style={{ margin: 50 }}>
                    <p>{value}</p>
                    <p>Basic Slider</p>
                    <Slider
                        min={0}
                        max={120}
                        value={value}
                        onChange={onSliderChange}
                        railStyle={{
                            height: 2
                        }}
                        handleStyle={{
                            height: 28,
                            width: 28,
                            marginLeft: -14,
                            marginTop: -14,
                            backgroundColor: "red",
                            border: 0
                        }}
                        trackStyle={{
                            background: "none"
                        }}
                    />
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