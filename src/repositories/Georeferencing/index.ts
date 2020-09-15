import { doc } from "../../services/google.spreadsheets";

// Repositories
import coordinateRepository from '../Coordinate'

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

const toCoordinates = (coordinate: string) => {
  const coords = coordinate
    .replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");

  return coords;
};

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[3];
  const rows = await sheet.getRows();
  const itens = rows.map(({ ID, Nome, Proprietário, Área, Coordenadas }) => {
    // coordinateRepository.create(ID, Coordenadas);

    return {
      id: ID,
      name: Nome,
      owner: Proprietário,
      area: Área,
      coordinates: Coordenadas,
    };
  });

  // console.log(typeof JSON.parse(itens[0].coordinates));

  return itens;
};

// const create = async (georeferencing: Georeferencing) => {
//   const response = await fetch(`http://localhost:8000/georeferencing`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(georeferencing),
//   });
//   return response.status;
//   if (response.ok) {
//     const resposta = await response.json();
//     return resposta;
//   }
//   throw new Error("Não foi possível cadastrar os dados");
// };

export default { getAll };
