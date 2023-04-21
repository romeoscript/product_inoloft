import React, { Component } from "react";

import { Map,GoogleApiWrapper } from "google-maps-react";

 class MapContainer extends Component {

  render() {
    return (
      <div className="w-full">
        {" "}
        <Map
          google={this.props.google}
          style={{ width: "250px", height: "250px", position: "relative" }}
          zoom={14}
          initialCenter={{
            lat: 47.444,
            lng: -122.176,
          }}
        />
      </div>
    );
  }
}
export default GoogleApiWrapper({ 
    apiKey: "  AIzaSyCqUKEOocU-P6SyHyt2lQzXPS6wsSKDk2A  "   
})(MapContainer);  
