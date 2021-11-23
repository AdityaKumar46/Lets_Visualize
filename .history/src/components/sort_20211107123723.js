import "./Sort.css";
import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Sort() {
    //const ANIMATION_SPEED_MS = 1;
    //const NUMBER_OF_ARRAY_BARS = 100;
    // const PRIMARY_COLOR = 'turquoise';
    // const SECONDARY_COLOR = 'red';

    const [arr1, setArr1] = React.useState([]);
    const [value, setValue] = useState(0)
    useEffect(() => {
        resetArray();
    }, [])

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function resetArray(value1) {
        const array = [];
        for (let i = 0; i < value1; i++) {
            array.push(randomIntFromInterval(0, 500));
        }
        console.log(arr1.length)
        setArr1(array);
    }

    const onSliderChange = value => {
        resetArray(value);
        setValue(value);
    };

    const mergeSort=()=>{
        
    }



    return (
        <>
            <div className="array-container">
                <div className="sorty">
                    <div style={{ width: 250, margin: 15 }}>
                        <h6>Generate array</h6>
                        <Slider
                            min={1}
                            max={100}
                            value={value}
                            onChange={onSliderChange}
                            railStyle={{
                                height: 2,
                            }}
                            handleStyle={{
                                height: 20,
                                width: 20,
                                marginLeft: -8.7,
                                marginTop: -8.7,
                                backgroundColor: "blue",
                                border: 1                              
                            }}
                            trackStyle={{
                                backgroundColor: 'rgb(43, 40, 40)',
                            }}
                        />
                        <p><strong>{value}</strong></p>
                    </div>
                    <div className="array-container m-2 ms-3">
                        <button type="button" className="btn btn-dark m-2">Selection Sort</button>
                        <button type="button" className="btn btn-dark m-2">Bubble sort</button>
                        <button type="button" className="btn btn-dark m-2">Insertion sort</button>
                        <button type="button" className="btn btn-dark m-2" onClick={mergeSort}>Merge sort</button>
                        <button type="button" className="btn btn-dark m-2">Quick sort</button>
                    </div>
                </div>

            </div>

            <div>
                <Bar myArray={arr1} />
            </div>

        </>
    );
}