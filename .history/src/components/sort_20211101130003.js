
import React from 'react'
import "./Sort.css"

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export class Sort extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
        {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array})
    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const mergeSortedArray = getMergeSortAnimations(array.slice());
          const quickSortedArray = getQuicSortAnimations(array.slice());
          console.log(arraysAreEqual(javaScriptSortedArray, quickSortedArray));
        }
      }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
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
          }
        }
      }

    QuickSort() {

      const animations = getQuicSortAnimations(this.state.array);
      for(let i=0;i<animations.length;i++)
      {
        const arrayBars = document.getElementsByClassName('array-bar')
        const [barOneIdx, barTwoIdx] = animations[i];
        console.log(arrayBars);
      }
      
    }

    HeapSort() {

    }

    BubbleSort() {
        
    }

    render() {

        const {array} = this.state;

        return (
          
            <>
                <div className="array-container">
                  <div className="press">
                    <button className="btn btn-primary" 
                    onClick={() => this.resetArray()}>Generate New Array</button>
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
                <div className="array-container">
                  {array.map((value, idx) => (
                  <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                  </div>
                  ))}
                  </div>

           </>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

export default SortingVisualizer
