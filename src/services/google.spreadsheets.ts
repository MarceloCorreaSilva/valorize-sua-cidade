import { GoogleSpreadsheet } from "google-spreadsheet";

// Credentials
// import credentials from "../_credentials/google-sheets-api.json";

const credentials = {
  client_email: String(process.env.REACT_APP_GOOGLE_CLIENT_EMAIL),
  private_key: String(process.env.REACT_APP_GOOGLE_PRIVATE_KEY)
    .replaceAll("\\n", "\\\n")
    .replaceAll("\\", ""),
};

const doc = new GoogleSpreadsheet(
  String(process.env.REACT_APP_GOOGLE_SPREADSHEET)
);

doc.useServiceAccountAuth({
  client_email: credentials.client_email,
  private_key: credentials.private_key,
});

export { doc };
