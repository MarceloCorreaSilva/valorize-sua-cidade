import { doc } from "../services/google.spreadsheets";

// Entities / Props
import { Producer } from "../entities/Producer";

// Repositories
import productRepository from "./Product";

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
        updated_at: DataAtualização,
        type: Tipo,
        name: Nome,
        owner: Proprietário,
        state_registration: InscriçãoEstadual,
        employees: Empregados ? Number(Empregados) : 0,
        total_area: AreaTotal ? Number(AreaTotal) : 0,
        vegetable_garden_area: AreaDeHorta ? Number(AreaDeHorta) : 0,
        orchard_area: AreaDePomar ? Number(AreaDePomar) : 0,
        irrigated: Irrigação === "1" ? true : false,
        covered_planting: CultivoProtegido === "1" ? true : false,
        vehicles: Veiculos ? Number(Veiculos) : 0,
        commercialization: Comercialização
          ? Comercialização.replaceAll(" ", "").split(",")
          : "",
        lat: Number(Latitude),
        lng: Number(Longitude),
        products: [],
      };
    }
  );

  const producers = itens.map((producer: Producer) => {
    return {
      ...producer,
      products: productRepository.getProductsByProducerId(producer.id)
    }
  });

  return producers;
};

export default { getAll };
