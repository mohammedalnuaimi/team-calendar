import React from 'react'
const Box = (props) => {
        return (
            <button className="box" onClick={function () { alert('YOU CLICKED ME!'); }}>
            {props.number}
            </button>
        );
}

export default Box;