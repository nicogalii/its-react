// Funzione per inviare la durata della prenotazione di un'attrezzatura
const bookingDurationApi = async (id: number, duration: number) => {
  const res = await fetch(
    // URL dell'API per salvare la durata della prenotazione
    `https://d3660g9kardf5b.cloudfront.net/api/equipment/${id}/book`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
      },
      body: JSON.stringify({ duration }),
    }
  );

  const data = await res.json();

  return data;
};

export default bookingDurationApi;
