import React, { Component } from 'react';
import cloud from './1_cloud.svg';
import key from './2_key.svg';
import palatte from './3_palatte.svg';
import money from './4_money.svg';
import coffee from './5_coffee.svg';
import MathComp from './Components/MathComp';
import AccountComp from './Components/AccountComp';
import AccControl from './Components/AccountsComp';
import './App.css';

class LogoComponent extends Component {   
    constructor() {
        super()
        this.state = { 
            showCalculator: false,
            showBank: false,
            showAccControl: false
         };
        this.clicked = this.clicked.bind(this);
        this.clicked2 = this.clicked2.bind(this);
        this.clicked3 = this.clicked3.bind(this);
    }

    clicked() {
        this.setState({ showCalculator: !this.state.showCalculator }); 
    }

    clicked2() {
        this.setState({ showBank: !this.state.showBank });
    }

    clicked3() {
        this.setState({ showAccControl: !this.state.showAccControl });
    }


    render () {
        return (
            <div>
                <div className="App">
                    <img src={cloud} className="App-otherlogos" alt="" onClick={this.clicked} />
                    <img src={key} className="App-otherlogos" alt="" onClick={this.clicked2} />
                    <img src={palatte} className="App-otherlogos" alt="" onClick={this.clicked3} />
                    <img src={money} className="App-otherlogos" alt="" onClick={() => alert("The icon was clicked")} /> 
                    <img src={coffee} className="App-otherlogos" alt="" onClick={() => alert("The icon was clicked")} />
                </div>

                { this.state.showCalculator ? <MathComp /> : null }
                { this.state.showBank ? <AccountComp /> : null }
                { this.state.showAccControl ? <AccControl /> : null }

            </div>
        )    
    }
}

export default LogoComponent;