import "./Sort.css";
import "./bubble.css"
import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {getMergeSortAnimations} from './Merge';
const containerRef = useRef(null);

export default function Sort() {
    const ANIMATION_SPEED_MS = 1;
    //const NUMBER_OF_ARRAY_BARS = 100;
     const PRIMARY_COLOR = 'blue';
     const SECONDARY_COLOR = 'red';
    //static c=0;
    const [arr1, setArr1] = React.useState([]);
    const [value, setValue] = useState(0)
    const [isDelay, setIsDelay] = useState(1);
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

    const onDelay = value =>{
        setIsDelay(value+0.5);
        //setIsDelay(prevState => prevState + 0.5);
    }

    function resetArrayColour() {
        const arrayBars = containerRef.current.children;
        for (let i = 0; i < arr1.length; i++) {
            const arrayBarStyle = arrayBars[i].style;
            arrayBarStyle.backgroundColor = '';
        }
        //setArr1([]);

    }

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
             // barOneStyle.backgroundColor = "yellow"
            }, i * ANIMATION_SPEED_MS);
           // c++;
            
          }
        }
       // setMergec(c);
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
                        <button type="button" className="btn btn-danger m-2" onClick={resetArrayColour}>Reset Array</button>
                        <a type="button" className="btn btn-warning m-2" href="/quick">Force Stop</a>
                    </div>
                    <div style={{ width: 250, margin: 15 }}>
                        <h6>Delay</h6>
                        <Slider
                            step={0.5}
                            min={0}
                            max={4.5}
                            value={isDelay}
                            onChange={onDelay}
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
                        <p><strong>{isDelay}</strong></p>
                    </div>

                </div>

            </div>

            <div>
                <div className="array-container ms-3" ref={containerRef}>
                    {arr1.map((value, idx) => (
                        <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                    ))}
                </div>
                <div className="barr">
                    <div>
                        <div className="mb-5 pb-5"><h6>No. of Comparison - :</h6><strong></strong></div>
                        <hr />
                        <div>
                            <h6>Time Complexity:-</h6>
                            <ul>
                                <li className="m-2"><strong>Best Case [Big-omega]:<div style={{ color: '#044605' }}>O(n*log n)</div></strong></li>
                                <li className="m-2"><strong>Average Case [Big-omega]:<div style={{ color: 'rgb(92 60 3)' }}>O(n*log n)</div></strong></li>
                                <li className="m-2"><strong>Worst Case [Big-omega]:<div style={{ color: "#cb0303" }}>O(n*log n)</div></strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}