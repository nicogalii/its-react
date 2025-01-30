// Funzione per inserire i dati della registrazione
const registerApi = async (username: string, password: string) => {
  const res = await fetch(
    // URL dell'API per la registrazione
    `https://d3660g9kardf5b.cloudfront.net/api/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  if (!res.ok) {
    throw new Error(`Errore durante la registrazione.`);
  }

  const data = await res.json();

  return data;
};

export default registerApi;
