import { doc } from "../../services/google.spreadsheets";

// Props
export interface Product {
  producerId: number;
  name: string;
  year: number;
  jan: number;
  fev: number;
  mar: number;
  abr: number;
  mai: number;
  jun: number;
  jul: number;
  ago: number;
  set: number;
  out: number;
  nov: number;
  dez: number;
  total: number;
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets

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
      Total,
    }) => {
      return {
        producerId: Number(Produtor),
        name: Produto,
        year: Number(Ano),
        jan: parseFloat(Janeiro),
        fev: parseFloat(Fevereiro),
        mar: parseFloat(Março),
        abr: parseFloat(Abril),
        mai: parseFloat(Maio),
        jun: parseFloat(Junho),
        jul: parseFloat(Julho),
        ago: parseFloat(Agosto),
        set: parseFloat(Setembro),
        out: parseFloat(Outubro),
        nov: parseFloat(Novembro),
        dez: parseFloat(Dezembro),
        total: parseFloat(Total),
      };
    }
  );

  return itens;
};

const getProductsByProducerId = (id: number) => {
  let sessionProducts = JSON.parse(sessionStorage.getItem("products") || "");
  if (sessionProducts) {
    const products = sessionProducts.filter(
      (product: Product) => product.producerId === id ? product : null
    );
    return products;
  }
  return [];
};

export default { getAll, getProductsByProducerId };
