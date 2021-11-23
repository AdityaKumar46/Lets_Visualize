import "./Sort.css";
import React, { useEffect, useState, useRef } from "react";
import Bar from "./Bar";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { getQuickSortAnimations } from "../components/Algo/Quicksort"
import {
    Link,
    useLocation
  } from "react-router-dom";


export default function Quick() {

    const DELAY = 1;
    const ACCESSED_COLOUR = 'turquoise';
    const SORTED_COLOUR = 'green';

    const [arr1, setArr1] = React.useState([]);
    const [value, setValue] = useState(0);
    const [isSorting, setIsSorting] = useState(false);
    const [isSorted, setIsSorted] = useState(false);
    const [isDelay, setIsDelay] = useState(1);
    
    const containerRef = useRef(null);

    useEffect(() => {
        resetArray();
    }, [])

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function resetArray(value1) {
        if (isSorting) return;
        if (isSorted) resetArrayColour();
        setIsSorted(false);
        const array = [];
        for (let i = 1; i <= value1; i++) {
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
    }

    function resetArrayColour() {
        const arrayBars = containerRef.current.children;
        for (let i = 0; i < arr1.length; i++) {
            const arrayBarStyle = arrayBars[i].style;
            arrayBarStyle.backgroundColor = '';
        }
        //setArr1([]);

    }

    const quickSort = () => {
        const animations = getQuickSortAnimations(arr1);
        animateArrayUpdate(animations);
    }

    function animateArrayUpdate(animations) {
        if (isSorting) return;
        setIsSorting(true);
        animations.forEach(([comparison, swapped], index) => {
            setTimeout(() => {
                if (!swapped) {
                    if (comparison.length === 2) {
                        const [i, j] = comparison;
                        animateArrayAccess(i);
                        animateArrayAccess(j);
                    } else {
                        const [i] = comparison;
                        animateArrayAccess(i);
                    }
                } else {
                    setArr1((prevArr) => {
                        const [k, newValue] = comparison;
                        const newArr = [...prevArr];
                        newArr[k] = newValue;
                        return newArr;
                    });
                }
            }, index * DELAY);
        });
        setTimeout(() => {
            animateSortedArray();
        }, animations.length * DELAY);
    }

    function animateArrayAccess(index) {
        const arrayBars = containerRef.current.children;
        const arrayBarStyle = arrayBars[index].style;
        setTimeout(() => {
            arrayBarStyle.backgroundColor = ACCESSED_COLOUR;
        }, DELAY);
        setTimeout(() => {
            arrayBarStyle.backgroundColor = '';
        }, DELAY * 2);
    }

    function animateSortedArray() {
        const arrayBars = containerRef.current.children;
        for (let i = 0; i < arrayBars.length; i++) {
            const arrayBarStyle = arrayBars[i].style;
            setTimeout(
                () => (arrayBarStyle.backgroundColor = SORTED_COLOUR),
                i * DELAY,
            );
        }
        setTimeout(() => {
            setIsSorted(true);
            setIsSorting(false);
        }, arrayBars.length * DELAY);
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
                        <button type="button" className="btn btn-dark m-2" onClick={quickSort}>Sort</button>
                        {/**<a type="button" className="btn btn-danger m-2" href="/quick">Reset Array</a>*/}
                        <button type="button" className="btn btn-danger m-2" onClick={resetArrayColour}>Reset Array</button>
                    </div>
                    <div style={{ width: 250, margin: 15 }}>
                        <h6>Delay</h6>
                        <Slider
                            step={0.5}
                            min={1}
                            max={5}
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