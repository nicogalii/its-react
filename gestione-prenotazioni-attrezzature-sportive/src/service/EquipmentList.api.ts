// Funzione per ottenere la lista delle attrezzature
const equipmentListApi = async () => {
  const res = await fetch(
    // URL dell'API per ottenere le  attrezzature
    "https://d3660g9kardf5b.cloudfront.net/api/equipment"
  );

  const data = await res.json();

  return data;
};

export default equipmentListApi;
