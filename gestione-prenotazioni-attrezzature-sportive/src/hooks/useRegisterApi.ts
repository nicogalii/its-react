import { useState } from "react";
import registerApi from "../service/Register.api.";

const useRegisterApi = () => {
  const [error, setError] = useState<string | null>(null);
  // Funzione per la registrazione
  const register = async (username: string, password: string) => {
    try {
      const data = await registerApi(username, password);

      // Verifica se ce un token e lo salva nel localStorage
      localStorage.setItem("token", data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  return { register, error };
};

export default useRegisterApi;
