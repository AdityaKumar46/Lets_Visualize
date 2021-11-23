import "./Sort.css";
import React, { useEffect } from "react";
import Bar from "./Bar";

export default function Sort() {
    const ANIMATION_SPEED_MS = 1;

    const NUMBER_OF_ARRAY_BARS = 100;
    const PRIMARY_COLOR = 'turquoise';
    const SECONDARY_COLOR = 'red';

    const [arr1, setArr1] = React.useState([]);
    useEffect(() => {
        resetArray();
    }, [])

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        setArr1(array);
    }

    return (
        <>
            
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