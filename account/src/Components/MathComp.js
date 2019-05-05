import React, { Component } from 'react';
import math from "./MathPOJO";

class MathComp extends Component {
  constructor() {
    super()
      this.state = { result: 0 }
    }

  doCalculation(e) {
    const a = Number(document.getElementById("input1").value);
    const b = Number(document.getElementById("input2").value);

    switch(e) {

      case 'add':
          this.setState( {result: math.sum(a,b) });
        break;

      case 'subtract':
          this.setState( {result: math.subtract(a,b) });
        break;

      case 'multiply':
          this.setState( {result:math.multiply(a,b) });
        break;

      case 'divide':
          this.setState( {result:math.divide(a,b) });  
        break;

      default:
    }
  } 
 

  render() {
        
    let { result } = this.state;
    console.log ("in MathComp")
    console.log("This is the result:", result)

      return (
          <div className="App">
            <h2> ~ Cool Secret Calculator ~ </h2>

            <input type = 'text' id = 'input1' placeholder = 'Enter your first number'/>
              <br/>
            <input type = 'text' id = 'input2' placeholder = 'Enter your second number'/>
              <br/>
           
            <button name = 'Add' onClick = {() => {this.doCalculation("add")}} > Add </button>
            <button name = 'Subtract' onClick = {() => {this.doCalculation("subtract")}} > Subtract </button>
            <button name = 'Multiply' onClick = {() => {this.doCalculation("multiply")}}> Multiply </button>
            <button name = 'Divide' onClick = {() => {this.doCalculation("divide")}}> Divide </button>

              <br/>

            {result}
            
           </div>
      )
    }
  }  

export default MathComp;
