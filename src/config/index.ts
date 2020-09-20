const getApp = () => {
  const name = process.env.REACT_APP_APP_NAME;
  
  return {
    name: name ? name : "",
  };
};

const getCity = () => {
  const name = process.env.REACT_APP_CITY_NAME;
  const code = process.env.REACT_APP_CITY_MUNICIPALITY_CODE_AT_IBGE;
  const lat = process.env.REACT_APP_CITY_LAT;
  const lng = process.env.REACT_APP_CITY_LNG;

  return {
    name: name ? name : "",
    code: code ? code : "",
    coordinate: {
      lat: lat ? Number(lat) : 0,
      lng: lng ? Number(lng) : 0,
    },
  };
};

const useGoogleMaps = () => {
  const useGoogleMaps = process.env.REACT_APP_USE_GOOGLE_MAP;

  return useGoogleMaps ? Boolean(useGoogleMaps) : false;
};

const getGoogleApis = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const googleSpreadsheet = process.env.REACT_APP_GOOGLE_SPREADSHEET;
  const clientEmail = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.REACT_APP_GOOGLE_PRIVATE_KEY;

  return {
    spreadsheet: googleSpreadsheet ? googleSpreadsheet : "",
    api_key: apiKey ? apiKey : "",
    credentials: {
      client_email: clientEmail ? clientEmail : "",
      private_key: privateKey
        ? privateKey.replaceAll("\\n", "\\\n").replaceAll("\\", "")
        : "",
    },
  };
};

export default {
  app: getApp(),
  city: getCity(),
  useGoogleMaps: useGoogleMaps(),
  google: getGoogleApis(),
};
