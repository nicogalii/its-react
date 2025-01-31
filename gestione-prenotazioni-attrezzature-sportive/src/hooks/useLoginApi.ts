import { useEffect, useState } from "react";
import loginApi from "../service/Login.api";
import { useNavigate } from "react-router";

const useLoginApi = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("token");

  // Verifica se si è loggati e in caso affermativo non permette l'accesso ai form di autentificazione
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  // Funzione per il login
  const login = async (username: string, password: string) => {
    try {
      const data = await loginApi(username, password);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  return { login, logout, getToken, error };
};

export default useLoginApi;
