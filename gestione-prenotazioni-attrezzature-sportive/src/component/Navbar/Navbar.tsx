import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
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
          <label htmlFor="check" className="checkbtn">
            <img
              src="../../../assets/images/menu-hamburger.svg"
              alt="Menu di navigazione"
              id="hamburger"
            />
          </label>
          <input type="checkbox" id="check" />

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

          {/* Desktop Menu */}
          <div className="nav-desktop">
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
