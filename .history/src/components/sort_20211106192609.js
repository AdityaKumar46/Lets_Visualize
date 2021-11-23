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
    const [slide, setSlide] = useState([0, 100])
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

    const resetSlide = (e) =>{
        setSlide(e.target.value);
    }

    return (
        <>

        <div className="array-container">
            <Slider style={{ width: 200, margin: 40 }} value={slide} onChange={resetSlide}/>
            <div className="value">{slide}</div>

            <h1>CSS Range Slider</h1>
                <h3>JS used for color-change and % label</h3>
                <input type="range" value="0"/>
                <div id="h4-container"><div id="h4-subcontainer"><h4>0<span></span></h4></div></div>
            </div>
            
            <div className="array-container">
                <div className="press">
                    <button className="btn btn-primary" onClick={() => resetArray()}>Generate New Array</button>
                </div>
            </div>
            <div>
            <Bar myArray={arr1}/>
            </div>
            
        </>
    );
}