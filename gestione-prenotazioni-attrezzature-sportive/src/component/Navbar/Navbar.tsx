import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        {/* Logo */}
        <a href="./" className="logo">
          <img
            src="../../../assets/images/logo.svg"
            alt="Logo di elite equipment"
          />
        </a>
        <nav>
          <div className="menu">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>

          {/* Mobile Menu */}
          <div className="nav-mobile">
            <ul>
              {/* Link alla Home */}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* Link alle prenotazioni */}
              <li>
                <NavLink to="/equipment-booked">Equipment Booked</NavLink>
              </li>
              {/* Link alle registrazioni */}
              <li>
                <NavLink to="/login">Login o Registrazione</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
