import registerApi from "../service/Register.api.";

const useRegisterApi = () => {
  // Funzione per la registrazione
  const register = async (username: string, password: string) => {
    try {
      const data = await registerApi(username, password);

      if (data && data.token) {
        localStorage.setItem("token", data.token);
      } else {
        throw new Error("Registrazione fallita, token non ricevuto.");
      }
    } catch (err) {
      console.error("Errore durante la registrazione.");
    }
  };


  return { register };
};

export default useRegisterApi;
