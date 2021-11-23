import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import "./Sort.css";

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 5;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


const Sort = () => {
    const [myArray, setMyArray] = useState([]);
    useEffect(() => {
        console.log(myArray)
        resetArray();
    },[]);

    const resetArray = () => {
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            setMyArray([myArray, {
                id: myArray.length,
                value: Math.floor(Math.random() * (max - min + 1) + min)
            }])
        }
    }

  

    return (
        <>
            <div className="array-container">
                <div className="press">
                    <button className="btn btn-primary" onClick={resetArray}>Generate New Array</button>
                </div>
            </div>
            <div className="array-cotainer">
                {[myArray].map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                ))}
            </div>
        </>

    )
}

export default Sort