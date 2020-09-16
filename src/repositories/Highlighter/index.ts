import { doc } from "../../services/google.spreadsheets";

// Props
export interface Highlighter {
  id: number;
  type: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  icon?: number;
}

const getIcon = (type: string) => {
  if (type === "Ponte") {
    return 0;
  } else if (type === "Serviço") {
    return 1;
  } else if (type === "Mata-burro") {
    return 2;
  } else if (type === "Porteira") {
    return 3;
  } else if (type === "Silo") {
    return 4;
  } else if (type === "Tanque") {
    return 5;
  } else if (type === "Represa") {
    return 6;
  } else if (type === "Agroindústria") {
    return 7;
  }
};

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[2];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({ ID, Tipo, Nome, Latitude, Longitude, Descrição }) => {
      return {
        id: ID,
        type: Tipo,
        name: Nome,
        lat: parseFloat(Latitude),
        lng: parseFloat(Longitude),
        description: Descrição,
        icon: getIcon(Tipo),
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
