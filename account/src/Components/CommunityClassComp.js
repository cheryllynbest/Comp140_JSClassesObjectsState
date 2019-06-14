import React, { Component } from 'react';
import CommunityClassPOJO from "./CommunityClassPOJO";
import CommunityClassCardComp from './CommunityClassCardComp';

class Community extends Component {
    constructor(props) {
      super(props)
        this.state = {
          totalAllPop: 0,
          mostNorthern: '',
          mostSouthern: '',            
        };
        
      this.controller = new CommunityClassPOJO();

    }   //Create City
      addNewAccount(e) {
        const tempName = (document.getElementById("inputCityName").value);
        const tempLatitude = Number(document.getElementById("latitude").value);
        const tempLongitude = Number(document.getElementById("longitude").value);
        const tempPopulation = Number(document.getElementById("population").value);

        this.controller.createCity(tempName, tempLatitude, tempLongitude, tempPopulation);

        let updateTotalPop = this.controller.getPopulationForAll();
        this.setState( { totalAllPop: updateTotalPop } );

        let updateNorthern = this.controller.getMostNorthern();
        this.setState( { mostNorthern: updateNorthern } );

        let updateSouthern = this.controller.getMostSouthern();
        this.setState( { mostSouthern: updateSouthern } );
      }

      getSingleAccount = (id) => {
        console.log("In the single account", this.controller.commArray)
        return this.controller.commArray.find(item => item.id === Number(id));
      }

      updateVisual = () => {
        if (this.controller.commArray.length === 0) {
          console.log("In the array is 0")
          this.setState({ totalAllPop: 0, mostNorthern: '', mostSouthern: ''});
        } else { 
          console.log("In the else statement")
        let tempPop = this.controller.getPopulationForAll();
        let tempNorthern = this.controller.getMostNorthern();
        let tempSouthern = this.controller.getMostSouthern();
        this.setState({mostNorthern: tempNorthern, mostSouthern: tempSouthern, totalAllPop: tempPop});
        }
      }
     
      deleteCity = (event) => {
        if (this.controller.commArray.length === 0) {
          return 0;
        } else { 
          const targetId = event.target.parentElement.id;
          this.controller.deleteCity(targetId);
          this.updateVisual();
        }  
      }
       
      moveIn = (event) => { 
        const targetId = event.target.parentElement.id;
        const tempInputValue = Number(document.getElementById('population' + targetId).value);
        const findSingleAccount = this.getSingleAccount(targetId);
        findSingleAccount.movedIn(tempInputValue);
        this.updateVisual();
      }
       
      moveOut = (event) => {
        const targetId = event.target.parentElement.id;
        const tempInputValue = Number(document.getElementById('population' + targetId).value);
        const findSingleAccount = this.getSingleAccount(targetId);
        findSingleAccount.movedOut(tempInputValue);
        this.updateVisual();
      }

      render() {
        const CardList = this.controller.commArray.map((item) => {
        return(
          <CommunityClassCardComp key={item.id} city={item} delCity={this.deleteCity} moveIn={this.moveIn} moveOut={this.moveOut} type={item.howBig()} hemi={item.whichSphere()}/>
        )
      });

      return(
        <div>

          <div className="App">

          <div className = "minmax">
            <h6> The total Population: { this.state.totalAllPop } </h6> 
            <h6> The most Northern City: { this.state.mostNorthern } </h6>  
            <h6> The the most Southern City: { this.state.mostSouthern } </h6> 
          </div>

            <h2> ~ Citys and Communitys ~ </h2>
            <h3> ~ Create a new City ~ </h3>

            <input type = 'text' id = 'inputCityName' placeholder = 'Name of City'/>
            <input type = 'text' id = 'latitude' placeholder = 'Latitude'/>
            <input type = 'text' id = 'longitude' placeholder = 'Longitude'/>
            <input type = 'text' id = 'population' placeholder = 'Starting Population'/>

            <button name = 'newCityName' onClick = {() => {this.addNewAccount()}} > Add New City </button>
          
          </div>

          <div className = "Card">
            { CardList }
          </div>

        </div>
      )
    }
}

export default Community;