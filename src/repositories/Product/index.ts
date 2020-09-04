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

  // eslint-disable-next-line array-callback-return
  itens.map((item) => {
    create(item);
  });

  return itens;
};

const create = async (product: Product) => {
  const response = await fetch(`http://localhost:8000/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (response.ok) {
    const resposta = await response.json();
    return resposta;
  }
  throw new Error("Não foi possível cadastrar os dados");
};

export default { getAll, create };
