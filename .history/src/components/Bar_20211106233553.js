import React from 'react'
import BarChart from 'react-bar-chart';

const Bar = (props) => {
    return (
        <>
            {<div className="array-cotainer">
                {props.myArray.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                ))}
            </div>}
            <div>
                <BarChart
                    data={props.myArray}
                    height={}
                    />
            </div>
        </>
    )
}

export default Bar
