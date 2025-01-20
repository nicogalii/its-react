// Funzione per ottenere la lista delle attrezzature da un'API remota
const equipmentDetail = async () => {
  // Chiamata all'API remota
  const res = await fetch(
    // URL dell'API remota
    "https://d3660g9kardf5b.cloudfront.net/api/equipment-booking"
  );
  // Estrazione dei dati dalla risposta
  const data = await res.json();
  // Ritorno dei dati estratti
  return data;
};

export default equipmentDetail;