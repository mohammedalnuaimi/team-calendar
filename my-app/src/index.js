import React, { Component } from 'react';
import './index.css';
import ReactDOM from 'react-dom'    
import Prayer from './Prayer/Prayer.js';

class Times extends React.Component {

    render() {
        return (
            <div>
            <h1> hi</h1>
            <Prayer />
            </div>
        )
    }
}

//export default Times;

ReactDOM.render(
    <Times />,
    document.getElementById('root')
);
