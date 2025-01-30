import { useState } from "react";
import { Link } from "react-router";
import useLoginApi from "../../hooks/useLoginApi";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLoginApi();

  // Funzione per gestire il 'book now' del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Eseguzione del login tramite il custom hook
    await login(username, password);
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
      <div className="error">{error ?? <p>{error}</p>}</div>

      <button type="submit">Login</button>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default FormLogin;
