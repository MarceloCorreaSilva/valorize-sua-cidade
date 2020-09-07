// Props
export interface Coordinate {
  georeferencingId: number;
  lat: number;
  lng: number;
}

const create = async (id: number, coordinates: string) => {

    // const newCoordinates = JSON.stringify(coordinates);
    // console.log(newCoordinates);

    const response = await fetch(`http://localhost:8000/coordinates`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    //   body: JSON.stringify(coordinates),
    body: coordinates.replaceAll('[', '').replaceAll(']', ''),
    });
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error("Não foi possível cadastrar os dados");
};

export default { create };
