import React from 'react';
import ReactDOM from 'react-dom';
import CardComp from './Components/CardComp';
import AccountsPOJO from "./Components/AccountsPOJO";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testObject = new AccountsPOJO();
  testObject.addAccounts(50, "Cheryls Chequing");
  const m1 = () => {};
  ReactDOM.render(<CardComp key={testObject.arrControl[0].id} account={testObject.arrControl[0]} delAcc={m1} depAcc={m1} witAcc={m1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});