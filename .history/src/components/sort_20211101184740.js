import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import "./Sort.css";

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 5;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


const Sort = () => {
    const [myArray, setMyArray] = useState([]);
  //  useEffect(() => {
   //    console.log(myArray)
    //   resetArray();
   // },[]);

    const resetArray = () => {
        console.log("1"+myArray)
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            setMyArray([myArray, {
                id: myArray.length,
                value: Math.floor(Math.random() * (5 - 500 + 1) + 5)
            }])
            console.log("2"+myArray)
        }
    }

  

    return (
        <>
            <div className="array-container">
                <div className="press">
                    <button className="btn btn-primary" onClick={resetArray}>Generate New Array</button>
                </div>
            </div>
            {console.log("3"+myArray)}
            <div className="array-cotainer">
                {myArray.map(item => (
                    <div className="array-bar" key={item.value} style={{ height: `${item.value}px` }}></div>
                ))}
            </div>
        </>

    )
}

export default Sort