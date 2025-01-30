import loginApi from "../service/Login.api";

const useLoginApi = () => {
  // Funzione per il login
  const login = async (username: string, password: string) => {
    try {
      const data = await loginApi(username, password);

      if (data && data.token) {
        localStorage.setItem("token", data.token);
      } else {
        throw new Error("Credenziali errate o token non trovato.");
      }
    } catch (err) {
      console.error("Errore nel login. Riprova.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  return { login, logout, getToken };
};

export default useLoginApi;
