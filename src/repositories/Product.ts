import { doc } from "../services/google.spreadsheets";

// Entitie / Props
import { Product } from "../entities/Product";

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
