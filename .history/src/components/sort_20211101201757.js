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
        console.log(myArray+"   -1")
      resetArray();
      console.log(myArray+"   0")
   },[]);

    const resetArray = () => {
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            myArray.push(randomIntFromInterval(5, 500));
        }
        console.log(myArray+"   1")
        setMyArray(myArray);
        console.log(myArray+"   2")
        console.log(myArray+"   3")
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
            {console.log(myArray+"   8")}
            <div className="array-container">
                  {myArray.map((value, idx) => (
                  <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                  </div>
                  ))}
                  </div>
            
      
            
        </>

    )
}

export default Sort