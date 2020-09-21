import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

// Configs
import config from "../../config";

// Components || Interfaces
import { Producer } from "../../repositories/Producer";
import { Highlighter } from "../../repositories/Highlighter";

interface Props {
  producers: Producer[];
  highlighters: Highlighter[];
}
interface LatLng {
  lat: number;
  lng: number;
}

const Map: React.FC<Props> = ({ producers, highlighters }) => {
  const [coordinates] = useState(config.city.coordinate);
  const [geoJSONOfTheMunicipality, setGeoJSONOfTheMunicipality] = useState({
    type: "Feature",
    properties: {
      id: "",
      name: "",
      description: "",
    },
    geometry: {
      type: "Polygon",
      coordinates: [[]],
    },
  });

  useEffect(() => {
    const loadGeoJSON = async () => {
      const municipality = config.city.code;
      await import(`../../data/geodata/${municipality}.json`).then((data) => {
        setGeoJSONOfTheMunicipality(data.features[0]);
      });
    };

    loadGeoJSON();
  }, []);

  const renderGeoJSONOfTheMunicipality = () => {
    const coordinates = geoJSONOfTheMunicipality.geometry.coordinates[0];
    let coordArr = Array<LatLng>();
    coordinates.map((coordinate: any) =>
      coordArr.push({ lat: coordinate[1], lng: coordinate[0] })
    );
    return (
      <Polygon
        path={coordArr}
        options={{
          strokeColor: "#fc1e0d",
          strokeOpacity: 1,
          strokeWeight: 2,
        }}
      />
    );
  };

  const renderRegions = () => {};

  return (
    <LoadScript googleMapsApiKey={config.google.api_key}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "500px",
          opacity: "0.9",
        }}
        center={coordinates}
        zoom={9}
      >
        {renderGeoJSONOfTheMunicipality()}
        {renderRegions()}

        {highlighters &&
          highlighters.map((highlighter: Highlighter, key) => {
            if (highlighter.lat !== null && highlighter !== null) {
              return (
                <Marker
                  key={key}
                  title={highlighter.name}
                  onLoad={() => {}}
                  position={{
                    lat: highlighter.lat,
                    lng: highlighter.lng,
                  }}
                />
              );
            }

            return null;
          })}

        {producers &&
          producers.map((producer: Producer, key) => {
            if (producer.lat !== null && producer.lng !== null) {
              return (
                <Marker
                  key={key}
                  title={producer.name}
                  onLoad={() => {}}
                  position={{ lat: producer.lat, lng: producer.lng }}
                />
              );
            }

            return null;
          })}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
