import { doc } from "../../services/api";

// Props
export interface Highlighter {
  ID: any;
  Tipo: any;
  Nome: any;
  Latitude: any;
  Longitude: any;
  Descrição: any;
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[2];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({ ID, Tipo, Nome, Latitude, Longitude, Descrição }) => {
      return {
        ID,
        Tipo,
        Nome,
        Latitude,
        Longitude,
        Descrição,
      };
    }
  );

  return itens;
};

export default { getAll };
