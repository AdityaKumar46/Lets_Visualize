import "./Sort.css";
import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {getMergeSortAnimations} from './Merge';

export default function Sort() {
    const ANIMATION_SPEED_MS = 5000;
    //const NUMBER_OF_ARRAY_BARS = 100;
     const PRIMARY_COLOR = 'blue';
     const SECONDARY_COLOR = 'red';

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
        for (let i = 1; i < value1; i++) {
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
        const animations = getMergeSortAnimations(arr1);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              barOneStyle.backgroundColor = "yellow"
              barOneStyle.backgroundColor = "yellow"
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }



    return (
        <>
            <div className="array-container">
                <div className="sorty">
                    <div style={{ width: 250, margin: 15 }}>
                        <h6>Generate array</h6>
                        <Slider
                            min={1}
                            max={360}
                            value={value}
                            onChange={onSliderChange}
                            railStyle={{
                                height: 2,
                                background: '#7a7070b8'
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
                        <a type="button" className="btn btn-danger m-2" href="/">Reset Array</a>
                    </div>
                </div>

            </div>

            <div>
                <Bar myArray={arr1} />
            </div>

        </>
    );
}