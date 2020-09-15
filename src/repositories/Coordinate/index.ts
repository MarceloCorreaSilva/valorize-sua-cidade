const _formatJSON = (coordinate: string) => {
  const coords = coordinate
    .replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");

  return coords;
};

const _parseJSON = (response: string) => {
    return response ? JSON.parse(response || "") : {};
};

const create = async (id: number, coordinates: string) => {
  if (coordinates) {
    let newCoordinates = _formatJSON(coordinates);
    // console.log({
    //   ID: id,
    //   Coord: _parseJSON(newCoordinates),
    // });
  }
};

export default { create };
