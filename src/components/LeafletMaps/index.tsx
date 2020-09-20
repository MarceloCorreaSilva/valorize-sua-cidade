import React, { useEffect, useState } from "react";
// import { Icon } from "leaflet";
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";

// Repositories
import { Producer } from "../../repositories/Producer";
import { Highlighter } from "../../repositories/Highlighter";

// Configs
import config from "../../config";
// import "leaflet/dist/leaflet.css";

// Data
// import geojson from "../../data/geojson.json";

// Icons SVG
// import bridge from "../../assets/icons/bridge.svg";
// import gate from "../../assets/icons/gate.svg";
// import services from "../../assets/icons/services.svg";
// import dais from "../../assets/icons/dais.svg";
// import silo from "../../assets/icons/silo.svg";
// import waterTank from "../../assets/icons/water-tank.svg";
// import fish from "../../assets/icons/fish.svg";
// import vegetable from "../../assets/icons/vegetable.svg";

interface Props {
  producers: Producer[];
  highlighters: Highlighter[];
}

const LeafletMaps: React.FC<Props> = ({ producers, highlighters }) => {
  // const [coordinates] = useState({
  //   lat: Number(process.env.REACT_APP_CITY_LAT),
  //   lng: Number(process.env.REACT_APP_CITY_LNG),
  // });
  const [coordinates] = useState(config.city.coordinate);
  // const [geoJSONOfTheMunicipality, setGeoJSONOfTheMunicipality] = useState(
  //   geojson
  // );
  // const icons = [
  //   new Icon({ iconUrl: bridge, iconSize: [40, 40] }),
  //   new Icon({ iconUrl: services, iconSize: [40, 40] }),
  //   new Icon({ iconUrl: dais, iconSize: [40, 40] }),
  //   new Icon({ iconUrl: gate, iconSize: [40, 40] }),
  //   new Icon({ iconUrl: silo, iconSize: [40, 40] }),
  //   new Icon({ iconUrl: waterTank, iconSize: [40, 40] }),
  //   new Icon({ iconUrl: fish, iconSize: [40, 40] }),
  //   new Icon({ iconUrl: vegetable, iconSize: [40, 40] }),
  // ];

  useEffect(() => {
    // console.log(coordinates);
  }, [coordinates]);

  return (
    <Map
      center={[coordinates.lat, coordinates.lng]}
      zoom={10}
      style={{ width: "100%", height: "400px", opacity: "0.9" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <GeoJSON data={geojson.features} /> */}

      {producers &&
        producers.map((producer: Producer, key) => (
          <Marker key={key} position={[producer.latitude, producer.longitude]}>
            <Popup>{producer.nome}</Popup>
            <Tooltip>Propriedade: {producer.nome}</Tooltip>
          </Marker>
        ))}

      {highlighters &&
        highlighters.map((highlighter: Highlighter, key) => (
          <Marker key={key} position={[highlighter.lat, highlighter.lng]}>
            <Popup>
              <div>
                <h2>{highlighter.name}</h2>
                <p>{highlighter.description}</p>
              </div>
            </Popup>
            <Tooltip>{highlighter.type}</Tooltip>
          </Marker>
        ))}
    </Map>
  );
};

export default LeafletMaps;
