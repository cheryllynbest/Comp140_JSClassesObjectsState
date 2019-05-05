import React, { Component } from 'react';
import Account from "./AccountPOJO";

class AccountComp extends Component {
    constructor() {
      super()
        this.state = { currentBalance: 0, accountName: " "};
        this.myAccount = new Account(this.state.currentBalance, this.state.accountName); 
      }

      doBanking(e) {
        const a = Number(document.getElementById("input").value);

        switch(e) {
            case 'depo':     
                this.myAccount.deposit(a);
                let newBalance = this.myAccount.getBalance();
                this.setState({ currentBalance: newBalance });
            break;
    
            case 'withdraw':
                this.myAccount.withdraw(a);
                let newBalance2 = this.myAccount.getBalance();
                this.setState({ currentBalance: newBalance2 });
            break;
    
          default:
        }
      } 
     
      render() {
          return (
              <div className="App">
                <h2> ~ Cool Secret Bank ~ </h2>
                <h2> Welcome to your Bank Account </h2>

                <input type = 'text' id = 'name' placeholder = 'Enter Name'/>
                <input type = 'number' id = 'input' placeholder = 'Enter $$ Here'/>
                  <br/>   

                <button name = 'depo' onClick = {() => {this.doBanking("depo")}} > Deposit </button>
                <button name = 'withdraw' onClick = {() => {this.doBanking("withdraw")}} > Withdraw </button>
                  <br/>
    
                { this.state.currentBalance }
                
               </div>
          )
        }
      }  
    
    export default AccountComp;