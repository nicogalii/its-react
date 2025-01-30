// Funzione per ottenere le attrezzature prenotate
const equipmentBookedApi = async () => {
  // Chiamata all'API per avere le attrezzature prenotate
  const res = await fetch(
    "https://d3660g9kardf5b.cloudfront.net/api/equipment-bookings",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
      },
    }
  );

  const data = await res.json();

  return data;
};

export default equipmentBookedApi;
