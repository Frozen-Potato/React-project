import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { Button } from "react-bootstrap";
import addresses from './data/Cood.js' 

export class ChargerMap extends Component {
    constructor(props){
        super(props);
        this.state = addresses;
    }
    displayMarkers = () => {
        return this.state.map((addresses, index) => {
        return <Marker key={index} id={index} position={{
            lat: addresses.Location.lat,
            lng: addresses.Location.long
        }}
        onClick={() => console.log("You clicked me!")} />
        })
      }
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              initialCenter={{ lat: 65, lng: 24}}
            >
              {this.displayMarkers()}
            </Map>
        );
      }
    
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCyB8ynKJOtJ9leC0F0OaVlMSdMpDTZ1RA'
  })(ChargerMap); 