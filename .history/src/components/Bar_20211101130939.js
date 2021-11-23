import React from 'react'
import Sort from './Sort'

const Bar = (props) => {
    return (
        <div>
             <div className="array-cotainer">
                {props.myArray.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                ))}
            </div>
        </div>
    )
}

export default Bar
