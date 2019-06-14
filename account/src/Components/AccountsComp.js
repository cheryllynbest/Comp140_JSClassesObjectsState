import React, { Component } from 'react';
import AccountsPOJO from "./AccountsPOJO";
import CardComp from "./CardComp";

class AccountsComp extends Component {
  constructor() {
    super()
      this.state = { maxValue: 0, minValue: 0, total: 0 };
      this.controller = new AccountsPOJO();
  }

  updateVisual = () => {
    let updateMax = this.controller.maxAccount();
    let updateMin = this.controller.minAccount()
    let total = this.controller.totalAccount();
    this.setState( { maxValue: updateMax, minValue: updateMin, total: total } );
  }

  addNewAccount = () => {
    const newName = (document.getElementById("inputName").value);
    const newBalance = Number(document.getElementById("inputBalance").value);
    this.controller.addAccounts(newBalance, newName);
    this.updateVisual();
  }

  getAccount = (id) => {
    return this.controller.arrControl.find( (acct) => acct.id === Number(id));
  }

  clearInput = (inputElement) => {
    inputElement.value = "";
  } 
  
  delAccount = (event) => {   
    let targetID = event.target.parentElement.id;
    this.controller.deleteAccount(targetID);
    this.updateVisual();
  }

  depAccount = (event) => {
    let targetID = event.target.parentElement.id;
    const userInput = (document.getElementById("dollarAmount"+targetID));
    const newDeposit = Number(userInput.value);
    const singleAccount = this.getAccount(targetID);
    this.clearInput(userInput);
    singleAccount.deposit(newDeposit);
    this.updateVisual();
  }

  witAccount = (event) => {
    let targetID = event.target.parentElement.id;
    const userInput = (document.getElementById("dollarAmount"+targetID));
    const newWithdraw = Number(userInput.value);
    const singleAccount = this.getAccount(targetID);
    this.clearInput(userInput);
    singleAccount.withdraw(newWithdraw);
    this.updateVisual();
  }

  render() {
    const CardList = this.controller.arrControl.map((item) => {
      return(
        <CardComp key={item.id} account={item} delAcc={this.delAccount} depAcc={this.depAccount} witAcc={this.witAccount} />
      )
    });
    

    return(
      <div>

        <div className="App">
          <h2> ~ Cool Secret Account Controller ~ </h2>
          <h3> ~ Let me help you create a new Account ~ </h3>

          <input type = 'text' id = 'inputName' placeholder = 'Name of Account'/>
            <br/>
          <input type = 'text' id = 'inputBalance' placeholder = 'Starting Balance'/>
            <br/>
          <button name = 'newAccountName' onClick = {() => {this.addNewAccount()}} > Open New Account </button>
            <br/>
        </div>

        <div className = "Card">
          <br/>
          { CardList }
        </div>

        <div className = "minmax">
          <h3> The max value is: { this.state.maxValue } </h3> 
          <h3> The min value is: { this.state.minValue } </h3>  
          <h3> The total value is: { this.state.total } </h3> 
        </div>

      </div>
    )
  }
}

export default AccountsComp;