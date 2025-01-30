// Funzione per inserire la durata della prenotazione
const bookingDurationApi = async (id: number, duration: number) => {
  // Chiamata all'API remota
  const res = await fetch(
    // URL dell'API remota
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
