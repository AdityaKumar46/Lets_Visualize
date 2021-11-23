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
        setMyArray([])
      resetArray();
   });

    const resetArray = () => {
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            myArray.push(randomIntFromInterval(5, 500));
        }
        console.log(myArray)
        setMyArray(myArray);
    }
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <>
            <div className="array-container">
                <div className="press">
                    <button className="btn btn-primary" onClick={resetArray}>Generate New Array</button>
                </div>
            </div>
            <ul>
            {myArray.map((item) => {
               
                return <li key={item.toString()}>{item.value}</li>
                
            })}
            </ul>
            
      
            
        </>

    )
}

export default Sort