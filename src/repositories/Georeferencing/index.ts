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

  return itens;
};

export default { getAll };
