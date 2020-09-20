/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

// Configs
import config from "../../config";

// Components || Interfaces
import { Producer } from "../../repositories/Producer";
import { Highlighter } from "../../repositories/Highlighter";
import { Georeferencing } from "../../repositories/Georeferencing";

// Data
// import geojson from "../../data/geodata/5003900.json";

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
    const load = async () => {
      // const municipality = process.env.REACT_APP_CITY_MUNICIPALITY_CODE_AT_IBGE;
      const municipality = config.city.code;
      const geojson2 = await import(
        `../../data/geodata/${municipality}.json`
      ).then((data) => {
        setGeoJSONOfTheMunicipality(data.features[0]);
        // console.dir(data.features[0]);
      });

      // setGeoJSONOfTheMunicipality(geojson2.default);

      // console.dir({
      //   municipality,
      //   // geojson,
      //   geojson2,
      // });
    };

    load();
  }, []);

  const renderGeoJSONOfTheMunicipality = () => {
    // let coordinates = geoJSONOfTheMunicipality.features[0].geometry.coordinates[0];
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

  const renderRegions = () => {
    let geo = sessionStorage.getItem("georeferencing");
    let geo2 = JSON.parse(geo ? geo : "");

    geo2.map((region: Georeferencing) => {
      let geo = region.coordinates
        .replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
      let coordinates = JSON.parse(geo);
      let coordArr = Array<LatLng>();
      // return console.log(geo);
      return null;
    });

    let geo3 = geo2[0].coordinates
      .replace(/\\n/g, "\\n")
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");

    let geo4 = JSON.parse(geo3);

    let coordinates = geo4;
    let coordArr = Array<LatLng>();
    coordinates.map((coordinate: LatLng) =>
      coordArr.push({ lat: coordinate.lat, lng: coordinate.lng })
    );

    // console.log("DEBUG: ", coordArr);

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

    // =========================================
    // geoJSON.map((region: Georeferencing) => {
    //   let coordinates = JSON.parse(region.coordinates);
    //   let coordArr = Array<LatLng>();
    //   coordinates.map((coordinate: LatLng) => coordArr.push({lat: coordinate.lat, lng: coordinate.lng}))

    //   return (
    //     <Polygon
    //       path={coordArr}
    //       options={{
    //         strokeColor: "#fc1e0d",
    //         strokeOpacity: 1,
    //         strokeWeight: 2,
    //       }}
    //     />
    //   );
    // });
    // console.log(coordinates);
  };

  const onLoad = (data: any) => {
    // console.log("data: ", data);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "500px",
        }}
        center={{
          lat: coordinates.lat,
          lng: coordinates.lng,
        }}
        zoom={9}
      >
        {renderGeoJSONOfTheMunicipality()}
        {/* {renderRegions()} */}

        {highlighters &&
          highlighters.map((highlighter: Highlighter, key) => {
            if (highlighter.lat !== null && highlighter !== null) {
              return (
                <Marker
                  key={key}
                  title={highlighter.name}
                  onLoad={onLoad}
                  position={{
                    lat: highlighter.lat,
                    lng: highlighter.lng,
                  }}
                />
              );
            }

            return null;
          })}

        {producers.map((producer: Producer, key) => {
          if (producer.latitude !== null && producer.longitude !== null) {
            return (
              <Marker
                key={key}
                title={producer.nome}
                onLoad={onLoad}
                position={{ lat: producer.latitude, lng: producer.longitude }}
              />
            )
          }

          return null;
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
