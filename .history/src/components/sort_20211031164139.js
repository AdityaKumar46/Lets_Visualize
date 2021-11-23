import React from 'react'
import "./Sort.css";
const sort = () => {
    return (
        <div>
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
 

   </div>
    )
}

export default sort
