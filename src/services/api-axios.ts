import axios from "axios";
import { access_token } from "../credentials/token.json";

const api = axios.create({
  baseURL:
    "https://sheets.googleapis.com/v4/spreadsheets/1Pc-PWyBI--iY1q6CTbuefIChsSMDRGtZDN6JE3xXqVY/values/Produtores",
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
  params: {
    key: "AIzaSyBtSItFBJQX6npD9V3xYddt0oj3tzsDbvY",
    majorDimension: "ROWS",
  },
});

export default api;
