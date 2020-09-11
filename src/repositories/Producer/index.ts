import { doc } from "../../services/google.spreadsheets";
import { Product } from "../Product";

// API
// import api from "../../services/api";

// Props
export interface Producer {
  id: number;
  data_atualizacao: string;
  tipo: string;
  nome: string;
  proprietario: string;
  inscricao_estadual: string;
  empregados: string;
  area_total: string;
  area_de_horta: string;
  area_de_pomar: string;
  irrigacao: boolean;
  cultivo_protegido: boolean;
  veiculos: number;
  comercializacao: string;
  latitude: string;
  longitude: string;
  produtos: Product[];
}

// const URL_PRODUCERS = `${api.URL_BACKEND}/producers`;

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc.title);
  // console.log(doc);

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({
      ID,
      DataAtualização,
      Tipo,
      Nome,
      Proprietário,
      InscriçãoEstadual,
      Empregados,
      AreaTotal,
      AreaDeHorta,
      AreaDePomar,
      Irrigação,
      CultivoProtegido,
      Veiculos,
      Comercialização,
      Latitude,
      Longitude,
    }) => {
      return {
        id: ID,
        data_atualizacao: DataAtualização,
        tipo: Tipo,
        nome: Nome,
        proprietario: Proprietário,
        inscricao_estadual: InscriçãoEstadual,
        empregados: Empregados,
        area_total: AreaTotal,
        area_de_horta: AreaDeHorta,
        area_de_pomar: AreaDePomar,
        irrigacao: Irrigação,
        cultivo_protegido: CultivoProtegido,
        veiculos: Veiculos,
        comercializacao: Comercialização,
        latitude: Latitude,
        longitude: Longitude,
      } as Producer;
    }
  );

  // eslint-disable-next-line array-callback-return
  // itens.map((item) => {
  //   create(item);
  // });

  return itens;
};

// const getAll = async () => {
//   return fetch(`${URL_PRODUCERS}?_embed=products`).then(async (response) => {
//     if (response.ok) {
//       const resposta = await response.json();
//       return resposta;
//     }

//     throw new Error("Não foi possível pegar os dados");
//   });
// };

// const create = async (producer: Producer) => {
//   const response = await fetch(`${URL_PRODUCERS}`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },

//     body: JSON.stringify(producer),
//   });

//   return response.status;
//   // if (response.ok) {
//   //   const resposta = await response.json();
//   //   return resposta;
//   // }
//   // throw new Error("Não foi possível cadastrar os dados");
// };

export default { getAll };
