import "./Sort.css";
import "./bubble.css"
import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {getMergeSortAnimations} from './Merge';

export default function Sort() {
    const ANIMATION_SPEED_MS = 1;
    //const NUMBER_OF_ARRAY_BARS = 100;
     const PRIMARY_COLOR = 'blue';
     const SECONDARY_COLOR = 'red';
    let c=0;
    const [arr1, setArr1] = React.useState([]);
    const [value, setValue] = useState(0)
    const [mergec, setMergec] = useState(0)
    useEffect(() => {
        resetArray();
    }, [])

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function resetArray(value1) {
        const array = [];
        for (let i = 1; i <=value1; i++) {
            array.push(randomIntFromInterval(0, 500));
        }
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
              c++;
              setMergec(c);
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              //barOneStyle.backgroundColor = "yellow"
              //barOneStyle.backgroundColor = "yellow"
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
                            max={295}
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
                        <button type="button" className="btn btn-dark m-2" onClick={mergeSort}>Sort</button>
                        <a type="button" className="btn btn-danger m-2" href="/">Reset Array</a>
                    </div>
                    
                </div>

            </div>

            <div>
                <Bar myArray={arr1} />
                <div className="barr">
                    <div>
                    <div style={{display: "flex"}}>
                        <div className="mb-5 pb-5"><h6>No. of Comparison - :</h6><strong>{mergec}</strong></div>
                        <hr/>
                        <div>
                        <h6>Time Complexity:-</h6>
                            <ul>
                                <li><strong>Best Case Time Complexity [Big-omega]: O(n*log n)</strong></li>
                                <li><strong>Average Time Complexity [Big-theta]: O(n*log n)</strong></li>
                                <li><strong>Worst Case Time Complexity [ Big-O ]: O(n*log n)</strong></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
         

        </>
    );
}