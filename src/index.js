import React, { Component } from 'react';
import './index.css';
import ReactDOM from 'react-dom'
import Box from './comp/box.js';

class Times extends React.Component {

    state = {
        number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    }

    render() {
        let data = null
        data = (
            <div className='matrix'>
                {
                    this.state.number.map(item => {

                        if (item == 8 || item == 15 || item == 22 || item == 29) {
                            return <React.Fragment> <br /><Box number={item} /></React.Fragment>
                        } else {
                            return <Box number={item} />
                        }
                    })
                }
            </div>
        )

        return (
            <div className='matrix'>
                <h1 className='title'> Log your dates</h1>
                {data}
            </div>
        )
    }
}

//export default Times;

ReactDOM.render(
    <Times />,
    document.getElementById('root')
);
