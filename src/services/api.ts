import { GoogleSpreadsheet } from "google-spreadsheet";

// Credentials
import credentials from "../credentials/google-sheets-api.json";

const getAllProductors = async () => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SPREADSHEET as string);

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
    // client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
    // private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({
      id,
      data_atualizacao,
      tipo,
      nome,
      proprietario,
      inscricao_estadual,
      empregados,
      area_total,
      area_de_horta,
      area_de_pomar,
      irrigacao,
      cultivo_protegido,
      veiculos,
      comercializacao,
      latitude,
      longitude,
    }) => {
      return {
        id,
        data_atualizacao,
        tipo,
        nome,
        proprietario,
        inscricao_estadual,
        empregados,
        area_total,
        area_de_horta,
        area_de_pomar,
        irrigacao,
        cultivo_protegido,
        veiculos,
        comercializacao,
        latitude,
        longitude,
      };
    }
  );
  //   console.log(sheet.title);
  //   console.log(itens);

  return itens;
};

export default { getAllProductors };
