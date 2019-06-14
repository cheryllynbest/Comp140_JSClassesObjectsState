import AccountPOJO from './AccountPOJO'

class AccountsPOJO {
    constructor() {       
       this.arrControl = [];
       this.counter = 1;
    }

    addAccounts(balance, name) {
        let id = this.counter;
        const tempAccount = new AccountPOJO(balance, name, id);
        this.arrControl.push(tempAccount);
        this.counter++;
    }

    deleteAccount = (id) => {
       const tempArray = this.arrControl.filter(item => item.id !== Number(id));
       this.arrControl = tempArray; 
    }

    generateAccountBalanceArray = () => {
        let tempArray = []; 
        for(let i = 0; i<this.arrControl.length; i++) { 
            tempArray.push(this.arrControl[i].balance);  
        }
        return tempArray;
    } 

    minAccount = () => {
        if (this.arrControl.length>0) {
            const minValue = Math.min.apply(Math, this.generateAccountBalanceArray());
            return Number(minValue);
        } else {
            return 0;  
          }
    }

    maxAccount = () => {
        if (this.arrControl.length>0) {        
            const maxValue = Math.max.apply(Math, this.generateAccountBalanceArray());
            console.log("This is max value:", maxValue)
            return Number(maxValue);
        } else {
            return 0;
        }
    }

    totalAccount = () => {
        let tempTotal = 0;
        for(let i = 0; i<this.arrControl.length; i++) { 
        tempTotal += this.arrControl[i].balance;
        }
        return Number(tempTotal);
    }

}

export default AccountsPOJO;

