import React, { Component } from 'react';
import cloud from './1_cloud.svg';
import key from './2_key.svg';
import palatte from './3_palatte.svg';
import money from './4_money.svg';
import coffee from './5_coffee.svg';
import MathComp from './Components/MathComp';
import AccountComp from './Components/AccountComp';
import AccControl from './Components/AccountsComp';
import CommunityClassComp from './Components/CommunityClassComp';
import LinkedListController from './Components/LinkedListController';
import FIFOLIFO from './Components/FIFOLIFOComp';
import './App.css';

class LogoComponent extends Component {   
    constructor() {
        super()
        this.state = { 
            showCalculator: false,
            showBank: false,
            showAccControl: false,
            showCityCommunity: false,
            showLinkedListController: false,
            showFIFOLIFO: false
         };
        this.clicked = this.clicked.bind(this);
        this.clicked2 = this.clicked2.bind(this);
        this.clicked3 = this.clicked3.bind(this);
        this.clicked4 = this.clicked4.bind(this);
        this.clicked5 = this.clicked5.bind(this);
        this.clicked6 = this.clicked6.bind(this);
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

    clicked4() {
        this.setState({ showCityCommunity: !this.state.showCityCommunity });
    } 

    clicked5() {
        this.setState({ showLinkedListController: !this.state.showLinkedListController });
    }

    clicked6() {
        this.setState({ showFIFOLIFO: !this.state.showFIFOLIFO });
    }

    render () {
        return (
            <div>
                <div className="App">
                    <img src={cloud} className="App-otherlogos" alt="" onClick={this.clicked} />
                    <img src={key} className="App-otherlogos" alt="" onClick={this.clicked2} />
                    <img src={palatte} className="App-otherlogos" alt="" onClick={this.clicked3} />
                    <img src={money} className="App-otherlogos" alt="" onClick={this.clicked4} /> 
                    <img src={coffee} className="App-otherlogos" alt="" onClick={this.clicked5} />
                    <img src="https://img.icons8.com/wired/100/000000/list.png" className="App-otherlogos" alt="" onClick={this.clicked6} />
                </div>

                { this.state.showCalculator ? <MathComp /> : null }
                { this.state.showBank ? <AccountComp /> : null }
                { this.state.showAccControl ? <AccControl /> : null }
                { this.state.showCityCommunity ? <CommunityClassComp /> :null }
                { this.state.showLinkedListController ? <LinkedListController /> :null}
                { this.state.showFIFOLIFO ? <FIFOLIFO /> :null}

            </div>
        )    
    }
}

export default LogoComponent;