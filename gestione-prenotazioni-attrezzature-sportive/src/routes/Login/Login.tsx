import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <form>
        // Campo input per inserire l'email
        <label htmlFor="email">Inserisci la tua email:</label>
        <input type="email" id="email" name="email" required />
        // Campo input per inserire la password
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        // Bottone per effettuare il login
        <button type="submit">Login</button>
        <Link to="/register">Non hai un account? Registrati</Link>
      </form>
    </div>
  );
};

export default Login;
