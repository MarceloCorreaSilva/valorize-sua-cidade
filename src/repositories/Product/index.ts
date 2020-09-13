import { doc } from "../../services/google.spreadsheets";

// Props
export interface ProductionOfTheMonth {
  month: string;
  total: number;
}

export interface Product {
  producerId: number;
  name: string;
  year: number;
  months: ProductionOfTheMonth[];
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
      Total
    }) => {
      return {
        producerId: Produtor,
        name: Produto,
        year: Ano,
        months: [
          { month: "jan", total: Janeiro },
          { month: "fev", total: Fevereiro },
          { month: "mar", total: Março },
          { month: "abr", total: Abril },
          { month: "mai", total: Maio },
          { month: "jun", total: Junho },
          { month: "jul", total: Julho },
          { month: "ago", total: Agosto },
          { month: "set", total: Setembro },
          { month: "out", total: Outubro },
          { month: "nov", total: Novembro },
          { month: "dez", total: Dezembro },
        ],
        jan: Janeiro,
        fev: Fevereiro,
        mar: Março,
        abr: Abril,
        mai: Maio,
        jun: Junho,
        jul: Julho,
        ago: Agosto,
        set: Setembro,
        out: Outubro,
        nov: Novembro,
        dez: Dezembro,
        total: Total
      };
    }
  );

  // eslint-disable-next-line array-callback-return
  // itens.map((item) => {
  //   create(item);
  // });

  return itens;
};

// const create = async (product: Product) => {
//   const response = await fetch(`http://localhost:8000/products`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(product),
//   });

//   return response.status;
//   if (response.ok) {
//     const resposta = await response.json();
//     return resposta;
//   }
//   throw new Error("Não foi possível cadastrar os dados");
// };

export default { getAll };
