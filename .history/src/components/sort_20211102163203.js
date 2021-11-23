import "./styles.css";
import React from "react";

export default function App() {
const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 30;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

const [arr1,setArr1] = React.useState(reset1Array());

function reset1Array() {
  const array = [];
  for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
  {
      array.push(randomIntFromInterval(5, 500));
  }
  return array;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function resetArray() {
  const array = [];
  for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
  {
      array.push(randomIntFromInterval(5, 500));
  }
  setArr1(array);
}
  
return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={resetArray}> ClickMe </button>
      {console.log(arr1)}
    </div>
  );
}