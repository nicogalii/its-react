import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useLoginApi from "../../hooks/useLoginApi";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLoginApi();
  const navigate = useNavigate();

  // Funzione per gestire il submit del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Esegui il login tramite il custom hook
    await login(username, password);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* Campo input per inserire l'username */}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      {/* Campo input per inserire la password */}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Bottone per effettuare il login */}
      <button type="submit">Login</button>

      {/* Link per la registrazione */}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default FormLogin;
