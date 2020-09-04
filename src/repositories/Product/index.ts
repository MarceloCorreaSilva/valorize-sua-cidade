import { doc } from "../../services/api";

// Props
export interface Product {
  Produtor: any;
  Produto: any;
  Ano: any;
  Janeiro: any;
  Fevereiro: any;
  Março: any;
  Abril: any;
  Maio: any;
  Junho: any;
  Julho: any;
  Agosto: any;
  Setembro: any;
  Outubro: any;
  Novembro: any;
  Dezembro: any;
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[1];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({
      Produtor,
      Produto,
      Ano,
      Janeiro,
      Fevereiro,
      Março,
      Abril,
      Maio,
      Junho,
      Julho,
      Agosto,
      Setembro,
      Outubro,
      Novembro,
      Dezembro,
    }) => {
      return {
        Produtor,
        Produto,
        Ano,
        Janeiro,
        Fevereiro,
        Março,
        Abril,
        Maio,
        Junho,
        Julho,
        Agosto,
        Setembro,
        Outubro,
        Novembro,
        Dezembro,
      };
    }
  );

  return itens;
};

export default { getAll };
