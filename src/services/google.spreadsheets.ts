import { GoogleSpreadsheet } from "google-spreadsheet";

// Credentials
import credentials from "../credentials/google-sheets-api.json";

const doc = new GoogleSpreadsheet(
  process.env.REACT_APP_GOOGLE_SPREADSHEET as string
);

doc.useServiceAccountAuth({
  client_email: credentials.client_email,
  private_key: credentials.private_key,
  // client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL as string,
  // private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY as string
});

export { doc };
