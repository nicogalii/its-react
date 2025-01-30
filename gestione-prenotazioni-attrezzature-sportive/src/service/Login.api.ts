// Funzione per inserire i dati del login
const loginApi = async (username: string, password: string) => {
  const res = await fetch(
    // URL dell'API per il login
    `https://d3660g9kardf5b.cloudfront.net/api/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (!res.ok) {
    throw new Error(`Errore durante il login.`);
  }

  const data = await res.json();

  return data;
};

export default loginApi;
