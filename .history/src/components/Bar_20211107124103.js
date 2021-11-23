import React from 'react'

const Bar = (props) => {
    return (
        <>
            <div className="array-container ms-5">
                {props.myArray.map((value, idx) => (
                    {<span>{value}</span>}
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                ))}
            </div>
        </>
    )
}

export default Bar
