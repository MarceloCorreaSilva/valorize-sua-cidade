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

  // eslint-disable-next-line array-callback-return
  itens.map((item) => {
    create(item);
  });

  return itens;
};

const create = async (highlighter: Highlighter) => {
  const response = await fetch(`http://localhost:8000/highlighters`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(highlighter),
  });
  if (response.ok) {
    const resposta = await response.json();
    return resposta;
  }
  throw new Error("Não foi possível cadastrar os dados");
};

export default { getAll, create };
