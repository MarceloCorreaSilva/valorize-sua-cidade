import axios from "axios";

async function fetch() {
  const opts = {
    url:
    //   "https://sheets.googleapis.com/v4/spreadsheets/1ZyOWH3FOjFekhRlAND9m_QQFY6F4IzP-gm-4FBRbG1U",
    "https://spreadsheets.google.com/feeds/cells/1i_1svLbb703gLI4VmZmQc-1vY1GmTZV-dtIpZVcyVgA/od6/public/basic?alt=json",
    method: "GET",
    headers: {
      //NOTICE: if enable the following line, the request will fail due to OPTIONS preflight failure
      //"User-Agent": "google-api-nodejs-client/1.3.1"
    },
    params: {
      key: 'AIzaSyAhYZQAE0NDjYaRyH9i0JNHPZg5bW22J_c',
    },
  };

//   return axios.default(opts);
return [];
}

export default {
  fetch,
  get: () => [],
};
