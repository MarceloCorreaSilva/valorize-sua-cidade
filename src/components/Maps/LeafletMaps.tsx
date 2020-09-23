import React, { useEffect, useState } from "react";
// import { Icon } from "leaflet";
import { Map, TileLayer, Marker, Popup, Tooltip, GeoJSON } from "react-leaflet";

// Configs
import config from "../../config";

// Entities / Props
import { Highlighter } from "../../entities/Highlighter";
import { Producer } from "../../entities/Producer";

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
  const [coordinates] = useState(config.city.coordinate);
  const [geoJSONOfTheMunicipality, setGeoJSONOfTheMunicipality] = useState<
    GeoJSON.FeatureCollection<any>
  >({} as GeoJSON.FeatureCollection<any>);

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
    const loadGeoJSON = async () => {
      const municipality = config.city.code;
      await import(`../../data/geodata/${municipality}.json`).then((data) => {
        setGeoJSONOfTheMunicipality(
          data.default as GeoJSON.FeatureCollection<any>
        );
      });
    };

    loadGeoJSON();
  }, []);

  const renderGeoJSONOfTheMunicipality = () => {
    if (geoJSONOfTheMunicipality.features) {
      return (
        <GeoJSON
          key="map"
          data={geoJSONOfTheMunicipality}
          style={{
            color: "#fc1e0d",
            opacity: 1,
            weight: 2,
          }}
        />
      );
    }
    return null;
  };

  const renderRegions = () => {};

  return (
    <Map
      center={[coordinates.lat, coordinates.lng]}
      zoom={9}
      style={{ width: "100%", height: "500px", opacity: "0.9" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {renderGeoJSONOfTheMunicipality()}
      {renderRegions()}

      {highlighters &&
        highlighters.map((highlighter: Highlighter, key: number) => {
          if (highlighter.lat !== null && highlighter !== null) {
            return (
              <Marker key={key} position={[highlighter.lat, highlighter.lng]}>
                <Popup>
                  <div>
                    <h2>{highlighter.name}</h2>
                    <p>{highlighter.description}</p>
                  </div>
                </Popup>
                <Tooltip>{highlighter.type}</Tooltip>
              </Marker>
            );
          }

          return null;
        })}

      {producers &&
        producers.map((producer: Producer, key: number) => {
          if (producer.lat !== null && producer.lng !== null) {
            return (
              <Marker key={key} position={[producer.lat, producer.lng]}>
                <Popup>{producer.name}</Popup>
                <Tooltip>Propriedade: {producer.name}</Tooltip>
              </Marker>
            );
          }

          return null;
        })}
    </Map>
  );
};

export default LeafletMaps;
