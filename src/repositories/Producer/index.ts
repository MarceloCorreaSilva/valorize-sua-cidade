import { doc } from "../../services/api";

// Props
export interface Producer {
  id: any;
  data_atualizacao: any;
  tipo: any;
  nome: any;
  proprietario: any;
  inscricao_estadual: any;
  empregados: any;
  area_total: any;
  area_de_horta: any;
  area_de_pomar: any;
  irrigacao: any;
  cultivo_protegido: any;
  veiculos: any;
  comercializacao: any;
  latitude: any;
  longitude: any;
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({
      id,
      data_atualizacao,
      tipo,
      nome,
      proprietario,
      inscricao_estadual,
      empregados,
      area_total,
      area_de_horta,
      area_de_pomar,
      irrigacao,
      cultivo_protegido,
      veiculos,
      comercializacao,
      latitude,
      longitude,
    }) => {
      return {
        id,
        data_atualizacao,
        tipo,
        nome,
        proprietario,
        inscricao_estadual,
        empregados,
        area_total,
        area_de_horta,
        area_de_pomar,
        irrigacao,
        cultivo_protegido,
        veiculos,
        comercializacao,
        latitude,
        longitude,
      };
    }
  );

  return itens;
};

export default { getAll };
