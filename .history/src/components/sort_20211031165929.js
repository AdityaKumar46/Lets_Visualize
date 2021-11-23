import React, { useState, useEffect } from 'react';
import "./Sort.css";

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 100;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


const Sort = () => {
    const [myArray, updateMyArray] = useState([]);
    useEffect(() => {
        resetArray();
      });

    const resetArray=()=>{
        const array = [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
        {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array})
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    return (
        <div>

            <div className="array-container">
            <div className="press">
                <button className="btn btn-primary" 
                onClick={() => resetArray()}>Generate New Array</button>
            </div>

            <div className="press1">
            <button className="btn btn-success" onClick={() => this.mergeSort()}>mergeSort</button>
            </div>

            <div className="press1">
                <button className="btn btn-danger" onClick={() => this.QuickSort()}>QuickSort</button>
            </div>

            <div className="press1">
                <button className="btn btn-info" onClick={() => this.HeapSort()}>HeapSort</button>
            </div>

            <div className="press1">
            <button className="btn btn-warning" onClick={() => this.BubbleSort()}>BubbleSort</button>
            </div>
            <button onClick={()=> this.testSortingAlgorithms()}>Test</button>

            </div>
        </div>
    )
}

export default Sort
