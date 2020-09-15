/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Components || Interfaces
import { Producer } from "../../repositories/Producer";
import { Highlighter } from "../../repositories/Highlighter";

interface Props {
  producers: Producer[];
  highlighters: Highlighter[];
}

const Map: React.FC<Props> = ({ producers, highlighters }) => {
  const onLoad = (data: any) => {
    // console.log("data: ", data);
  };

  useEffect(() => {
    // console.log("highlighters: ", highlighters);
  }, [highlighters]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "400px",
        }}
        center={{
          lat: -18.675444,
          lng: -53.64186,
        }}
        zoom={10}
      >
        {highlighters &&
          highlighters.map((highlighter: Highlighter, key) => {
            return (
              <Marker
                key={key}
                title={highlighter.name}
                onLoad={onLoad}
                position={{
                  lat: highlighter.lat,
                  lng: highlighter.lng,
                }}
              >
                {/* <InfoWindow
                  onLoad={onLoad}
                  position={{
                    lat: highlighter.lat,
                    lng: highlighter.lng,
                  }}
                >
                  <div
                    style={{
                      background: `white`,
                      border: `1px solid #ccc`,
                      padding: 15,
                    }}
                  >
                    <h1>{highlighter.name}</h1>
                  </div>
                </InfoWindow> */}
              </Marker>
            );
          })}

        {producers.map((producer: Producer, key) => (
          <Marker
            key={key}
            title={producer.nome}
            onLoad={onLoad}
            position={{ lat: producer.latitude, lng: producer.longitude }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
