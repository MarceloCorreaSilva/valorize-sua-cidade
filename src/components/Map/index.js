import React from "react";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class Map extends React.Component {

  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: -18.678761,
      lng: -53.637993,
    },
    markerPosition: {
      lat: -18.678761,
      lng: -53.637993,
    }
  }

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }} 
        >
          <Marker position={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}>
            <InfoWindow>
              <div>Hello</div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      ))
    );

    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXfldFNZ4WTjwn56GltKgQRL2XOam66yU&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
