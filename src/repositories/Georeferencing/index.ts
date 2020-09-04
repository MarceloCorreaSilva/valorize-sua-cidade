import { doc } from "../../services/api";

// Props
export interface Georeferencing {
  ID: any;
  Nome: any;
  Proprietário: any;
  Área: any;
  Coordenadas: any;
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[3];
  const rows = await sheet.getRows();
  const itens = rows.map(({ ID, Nome, Proprietário, Área, Coordenadas }) => {
    return {
      ID,
      Nome,
      Proprietário,
      Área,
      Coordenadas,
    };
  });

  // eslint-disable-next-line array-callback-return
  itens.map((item) => {
    create(item);
  });

  return itens;
};

const create = async (georeferencing: Georeferencing) => {
  const response = await fetch(`http://localhost:8000/georeferencing`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(georeferencing),
  });
  if (response.ok) {
    const resposta = await response.json();
    return resposta;
  }
  throw new Error("Não foi possível cadastrar os dados");
};

export default { getAll, create };
