import { doc } from "../services/google.spreadsheets";

const getIcon = (type: string) => {
  if (type === "Ponte") {
    return 0;
  } else if (type === "Serviço") {
    return 1;
  } else if (type === "Mata-burro") {
    return 2;
  } else if (type === "Porteira") {
    return 3;
  } else if (type === "Silo") {
    return 4;
  } else if (type === "Tanque") {
    return 5;
  } else if (type === "Represa") {
    return 6;
  } else if (type === "Agroindústria") {
    return 7;
  }
};

const getAll = async () => {
  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[2];
  const rows = await sheet.getRows();
  const itens = rows.map(
    ({ ID, Tipo, Nome, Latitude, Longitude, Descrição }) => {
      return {
        id: Number(ID),
        type: Tipo,
        name: Nome,
        lat: parseFloat(Latitude),
        lng: parseFloat(Longitude),
        description: Descrição,
        icon: getIcon(Tipo),
      };
    }
  );

  return itens;
};

export default { getAll };
