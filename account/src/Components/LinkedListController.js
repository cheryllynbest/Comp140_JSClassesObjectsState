import React, { Component } from 'react';
import LinkedListPOJO from "./LinkedListPOJO";

class LinkedList extends Component {
  constructor() {
    super()
      this.controller = new LinkedListPOJO();
  }

  addNewNode = () => {
    const tempInputSubject = (document.getElementById('inputString'));
    if (tempInputSubject.value === "") {
      return;
    }
    const tempInputValue = (document.getElementById('inputNumber'));
    this.controller.addNode(tempInputSubject.value, tempInputValue.value);
    tempInputSubject.value = "";
    tempInputValue.value = "";
      console.log("This is the linkedList:", this.controller.showCompleteLinkedListArray())
      console.log("This is the current Node:", this.controller.showCurrentNode())
    this.setState( {controller: this.controller} );
  }

  moveCurrentNodeBack= () => {
    this.controller.currentMoveBack();
      console.log("This is the linkedList:", this.controller.showCompleteLinkedListArray())
      console.log("This is the current Node:", this.controller.showCurrentNode())
    this.setState( {controller: this.controller} );
  }

  moveCurrentNodeForward= () => {
    this.controller.currentMoveForward();
      console.log("This is the linkedList:", this.controller.showCompleteLinkedListArray())
      console.log("This is the current Node:", this.controller.showCurrentNode())
    this.setState( {controller: this.controller} );
  }
  
  moveToFirst= () => {
    this.controller.currentMoveToFirst();
      console.log("This is the linkedList:", this.controller.showCompleteLinkedListArray())
      console.log("This is the current Node:", this.controller.showCurrentNode())
    this.setState( {controller: this.controller} );
  }

  moveToLast= () => {
    this.controller.currentMoveToLast();
      console.log("This is the linkedList:", this.controller.showCompleteLinkedListArray())
      console.log("This is the current Node:", this.controller.showCurrentNode())
    this.setState( {controller: this.controller} );
  }

  insertNode = () => {
    const tempInputSubject = (document.getElementById('inputString'));
    if (tempInputSubject.value === "") {
      return;
    }
    const tempInputValue = (document.getElementById('inputNumber'));
    this.controller.insertNodeAfter(tempInputSubject.value, tempInputValue.value);
    tempInputSubject.value = "";
    tempInputValue.value = "";
      console.log("This is the linkedList:", this.controller.showCompleteLinkedListArray())
      console.log("This is the current Node:", this.controller.showCurrentNode())
    this.setState( {controller: this.controller} );
  }

  deleteNode = () => {
    // console.log("In deleteNode")
    if (this.controller.length < 1) {
        console.log("Size matters, so try again");
      return;
    } else {
      this.controller.delete()
        console.log("This is the linkedList:", this.controller.showCompleteLinkedListArray())
        console.log("This is the current Node:", this.controller.showCurrentNode())
      this.setState( {controller: this.controller} );
  }}

  render() {
    return(
      <div>
        <div className="App">
          <div className = "info">
            <h6> The Current Node is:   { this.controller.showCurrentNode() }   </h6>
            <h6> The LinkedList Node Length is:   { this.controller.length }    </h6>
            <h6> The Total of the List is:   { this.controller.addNodeTotals() }      </h6>
          </div>
        <input type = 'text' id = 'inputString' placeholder = 'Enter String Here'/>
        <input type = 'number' id = 'inputNumber' placeholder = 'Enter Number Here'/>
        <br></br>
        <button name = 'addNewNode' onClick = {() => {this.addNewNode()}} > Create New Node </button>
        <button name = 'moveCurrentBack' onClick = {() => {this.moveCurrentNodeBack()}} > Move Current Back </button>
        <button name = 'moveCurrentForward' onClick = {() => {this.moveCurrentNodeForward()}} > Move Current Forward </button>
        <button name = 'moveToFirst' onClick = {() => {this.moveToFirst()}} > First Node </button>
        <button name = 'moveToLast' onClick = {() => {this.moveToLast()}} > Last Node </button>
        <button name = 'insertNode' onClick = {() => {this.insertNode()}} > Insert Node </button>
        <button name = 'deleteNode' onClick = {() => {this.deleteNode()}} > Delete Node </button>
        <br></br>
        </div>
      </div>
    )
  }
}     

export default LinkedList;