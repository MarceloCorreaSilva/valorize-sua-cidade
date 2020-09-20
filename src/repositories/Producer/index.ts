import { doc } from "../../services/google.spreadsheets";
import productRepository, { Product } from "../Product";

// Props
export interface Producer {
  id: number;
  data_atualizacao: string;
  tipo: string;
  nome: string;
  proprietario: string;
  inscricao_estadual: string;
  empregados: number;
  area_total: number;
  area_de_horta: number;
  area_de_pomar: number;
  irrigacao: boolean;
  cultivo_protegido: boolean;
  veiculos: number;
  comercializacao: string[];
  latitude: number;
  longitude: number;
  produtos: Product[];
}

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets

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
        id: Number(ID),
        data_atualizacao: DataAtualização,
        tipo: Tipo,
        nome: Nome,
        proprietario: Proprietário,
        inscricao_estadual: InscriçãoEstadual,
        empregados: Empregados ? Number(Empregados) : 0,
        area_total: AreaTotal ? Number(AreaTotal) : 0,
        area_de_horta: AreaDeHorta ? Number(AreaDeHorta) : 0,
        area_de_pomar: AreaDePomar ? Number(AreaDePomar) : 0,
        irrigacao: Irrigação === "1" ? true : false,
        cultivo_protegido: CultivoProtegido === "1" ? true : false,
        veiculos: Veiculos ? Number(Veiculos) : 0,
        comercializacao: Comercialização
          ? Comercialização.replaceAll(" ", "").split(",")
          : "",
        latitude: parseFloat(Latitude),
        longitude: parseFloat(Longitude),
        produtos: [],
      };
    }
  );

  const producers = itens.map((producer: Producer) => {
    return {
      ...producer,
      produtos: productRepository.getProductsByProducerId(producer.id)
    }
  });

  return producers;
};

export default { getAll };
