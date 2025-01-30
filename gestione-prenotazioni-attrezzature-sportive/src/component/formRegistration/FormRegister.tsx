import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useRegisterApi from "../../hooks/useRegisterApi";

const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, error } = useRegisterApi();
  const navigate = useNavigate();
  2;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await register(username, password);
    navigate("/login");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {/* Campo input per inserire l'username */}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* Campo input per inserire la password */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error ?? <p>{error}</p>}
        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
};

export default FormRegister;
