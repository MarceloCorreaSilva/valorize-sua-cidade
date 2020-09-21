import { GoogleSpreadsheet } from "google-spreadsheet";

// Configs
import config from "../config";

const doc = new GoogleSpreadsheet(config.google.spreadsheet);

doc.useServiceAccountAuth(config.google.credentials);

export { doc };
