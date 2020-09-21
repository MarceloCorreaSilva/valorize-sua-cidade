import { doc } from "../../services/google.spreadsheets";

// Props
export interface Georeferencing {
  id: number;
  name: string;
  owner: string;
  area: string;
  coordinates: string;
}
interface LatLng {
  lat: number;
  lng: number;
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[3];
  const rows = await sheet.getRows();
  const itens = rows.map(({ ID, Nome, Proprietário, Área, Coordenadas }) => {

    return {
      id: ID,
      name: Nome,
      owner: Proprietário,
      area: Área,
      coordinates: Coordenadas,
    };
  });

  return itens;
};

export default { getAll };
