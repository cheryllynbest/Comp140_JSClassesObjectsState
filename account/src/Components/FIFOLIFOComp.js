import React, { Component } from 'react';
import WorkFlow from './FIFO_LIFO_POJO';

class FIFO_LIFO extends Component {
    constructor() {
        super()
        this.mainArray = new WorkFlow();
    }

    addToArray() {
        const tempName = (document.getElementById("name").value);
        this.mainArray.createArray(tempName);
        this.setState( {mainArray: this.mainArray} )
    }

    FIFO() {
        this.mainArray.FIFO();
        this.setState( {mainArray: this.mainArray} )
    }

    LIFO() {
        this.mainArray.LIFO();
        this.setState( {mainArray: this.mainArray} )
    }
 
    render() {
        const showArray = this.mainArray.arr.map((a, b) => {
            return (
                <div key= {b}> 
                    <h2> {a} </h2>
                </div>
            )})

        return (
            <div>
                <br/>   
                <h3>~ This is the cool secret FIFO LIFO ~</h3> 
                <input type = 'text' id = 'name' placeholder = 'Enter your name here'/>
                <br/>     
                <button name = 'AddToArray' onClick = {() => {this.addToArray()}} > Add To Array </button>
                <button name = 'FIFO' onClick = {() => {this.FIFO()}}> FIFO </button> 
                <button name = 'LIFO' onClick = {() => {this.LIFO()}} > LIFO </button>
                <br/>
                Your Array now looks like: {showArray} 
            </div>  
        )
    }
}

export default FIFO_LIFO;

