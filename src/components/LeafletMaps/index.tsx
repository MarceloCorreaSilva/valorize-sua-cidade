import React, { useEffect } from "react";
import { Icon } from "leaflet";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  GeoJSON
} from "react-leaflet";
import { Producer } from "../../repositories/Producer";
import { Highlighter } from "../../repositories/Highlighter";

import bridge from "../../assets/icons/bridge.svg";
import gate from "../../assets/icons/gate.svg";
import services from "../../assets/icons/services.svg";
import dais from "../../assets/icons/dais.svg";
import silo from "../../assets/icons/silo.svg";
import waterTank from "../../assets/icons/water-tank.svg";
import fish from "../../assets/icons/fish.svg";
import vegetable from "../../assets/icons/vegetable.svg";

interface Props {
  producers: Producer[];
  highlighters: Highlighter[];
}

const LeafletMaps: React.FC<Props> = ({ producers, highlighters }) => {
  const icons = [
    new Icon({ iconUrl: bridge, iconSize: [40, 40] }),
    new Icon({ iconUrl: services, iconSize: [40, 40] }),
    new Icon({ iconUrl: dais, iconSize: [40, 40] }),
    new Icon({ iconUrl: gate, iconSize: [40, 40] }),
    new Icon({ iconUrl: silo, iconSize: [40, 40] }),
    new Icon({ iconUrl: waterTank, iconSize: [40, 40] }),
    new Icon({ iconUrl: fish, iconSize: [40, 40] }),
    new Icon({ iconUrl: vegetable, iconSize: [40, 40] }),
  ];

  useEffect(() => {
    // console.log(highlighters);
  }, [highlighters]);

  return (
    <Map
      center={[-18.675444, -53.64186]}
      zoom={10}
      style={{ width: "100%", height: "400px", opacity: "0.9" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {producers &&
        producers.map((producer: Producer, key) => (
          <Marker key={key} position={[producer.latitude, producer.longitude]}>
            <Popup>{producer.nome}</Popup>
            <Tooltip>Propriedade: {producer.nome}</Tooltip>
          </Marker>
        ))}

      {highlighters &&
        highlighters.map((highlighter: Highlighter, key) => (
          <Marker
            key={key}
            position={[highlighter.lat, highlighter.lng]}
            icon={icons[highlighter.icon]}
          >
            <Popup>
              <div>
                <h2>{highlighter.name}</h2>
                <p>{highlighter.description}</p>
              </div>
            </Popup>
            <Tooltip>{highlighter.type}</Tooltip>
          </Marker>
        ))}
        <GeoJSON data={[]}></GeoJSON>
    </Map>
  );
};

export default LeafletMaps;
