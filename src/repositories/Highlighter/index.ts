import { doc } from "../../services/google.spreadsheets";

// Props
export interface Highlighter {
  id: number;
  type: string;
  name: string;
  lat: string;
  lng: string;
  description: string;
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[2];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({ ID, Tipo, Nome, Latitude, Longitude, Descrição }) => {
      return {
        'id': ID,
        'type': Tipo,
        'name': Nome,
        'lat': Latitude,
        'lng': Longitude,
        'description': Descrição,
      };
    }
  );

  // eslint-disable-next-line array-callback-return
  // itens.map((item) => {
  //   create(item);
  // });

  return itens;
};

// const create = async (highlighter: Highlighter) => {
//   const response = await fetch(`http://localhost:8000/highlighters`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(highlighter),
//   });

//   return response.status;
//   if (response.ok) {
//     const resposta = await response.json();
//     return resposta;
//   }
//   throw new Error("Não foi possível cadastrar os dados");
// };

export default { getAll };
