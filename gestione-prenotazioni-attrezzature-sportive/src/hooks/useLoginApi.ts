import { useState } from "react";
import loginApi from "../service/Login.api";
import { useNavigate } from "react-router";

const useLoginApi = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // Funzione per il login
  const login = async (username: string, password: string) => {
    if (!getToken()) {
      try {
        const data = await loginApi(username, password);
        localStorage.setItem("token", data.token);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    } else {
      navigate("/");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  return { login, logout, getToken, error };
};

export default useLoginApi;
