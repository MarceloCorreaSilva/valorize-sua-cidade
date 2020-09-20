import { GoogleSpreadsheet } from "google-spreadsheet";

// Configs
import config from '../config';

// Credentials
// import credentials from "../_credentials/google-sheets-api.json";

// const credentials = {
//   client_email: String(process.env.REACT_APP_GOOGLE_CLIENT_EMAIL),
//   private_key: String(process.env.REACT_APP_GOOGLE_PRIVATE_KEY)
//     .replaceAll("\\n", "\\\n")
//     .replaceAll("\\", ""),
// };

// const doc = new GoogleSpreadsheet(String(process.env.REACT_APP_GOOGLE_SPREADSHEET));
const doc = new GoogleSpreadsheet(config.google.spreadsheet);

// doc.useServiceAccountAuth({client_email: credentials.client_email, private_key: credentials.private_key});
doc.useServiceAccountAuth(config.google.credentials);

export { doc };
