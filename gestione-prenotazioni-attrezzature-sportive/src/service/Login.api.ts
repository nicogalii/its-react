// Funzione per inserire i dati del login
const loginApi = async (username: string, password: string) => {
  // Chiamata all'API remota
  const res = await fetch(
    // URL dell'API remota
    `https://d3660g9kardf5b.cloudfront.net/api/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  const data = await res.json();

  return data;
};

export default loginApi;
