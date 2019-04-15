import React, { Component } from 'react';
import Radium from 'radium'
import './index.css';
import ReactDOM from 'react-dom'
import Box from './comp/box.js';
import axios from 'axios';

class Times extends React.Component {

    state = {
        number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        boxKey: [],
        activeIndex: null
    }


    hoveredOver = () => {
    }

    handleClick = (index) => this.setState({ activeIndex: index })

    clickedBtn= (index) =>  console.log("xxxxx", index)
       // this.setState({ activeIndex: index })


    render() {
        const styles = {
            base: {
                backgroundColor: 'black',
                color: 'yellow',
                ":hover": {
                    backgroundColor: "green",
                    color: "red"
                },
                ":active": {
                    backgroundColor: "green",
                    color: "yellow"
                }
            }
        }

        let data = null
        data = (
            <div className='inner-matrix'>
                {
                    this.state.number.map((item) => {
                        if (item === 8 || item === 15 || item === 22 || item === 29) {
                            return <React.Fragment> <br />
                                <Box number={item}
                                    style={styles.base}
                                    index={item}
                                    isActive={this.state.activeIndex === item}
                                   // click={this. }
                                    hover={this.hoveredOver} />
                            </React.Fragment>
                        } else {
                            return <Box number={item}
                                style={styles.base}
                                index={item}
                                isActive={this.state.activeIndex === item}
                                click={this.clickedBtn  }
                                hover={this.hoveredOver} />
                        }
                    })
                }
            </div>
        )

        return (
            <div className='matrix' >
                <h1 className='title'> Log your dates</h1>
                {data}
            </div>
        )
    }
}

ReactDOM.render(<Times />, document.getElementById('root'));