import React from 'react'
import Radium from 'radium'
const Box = (props) => {
        return (
            <button className="box" style={props.style}>
            {props.number}
            </button>
        );
}

export default Radium(Box);