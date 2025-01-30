import { NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import useLoginApi from "../../hooks/useLoginApi";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, getToken } = useLoginApi();
  const [token, setToken] = useState(getToken());
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    // Aggiorna lo stato token ogni volta che cambia
    setToken(getToken());
  }, [getToken()]);

  const handleLogout = () => {
    logout();
    setToken(null);
    navigate("/login");
  };

  return (
    <>
      <header>
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img
            src="../../../assets/images/logo.svg"
            alt="Logo di elite equipment"
          />
        </NavLink>

        <button className="hamburger-btn">
          <Hamburger
            size={30}
            toggled={openMenu}
            toggle={setOpenMenu}
            color="white"
          />
        </button>
        {openMenu && (
          <div className="menu-mobile">
            <nav>
              <ul>
                <li>
                  <NavLink to="/" onClick={() => setOpenMenu(false)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/equipment-booked"
                    onClick={() => setOpenMenu(false)}
                  >
                    Equipment Booked
                  </NavLink>
                </li>

                {token && (
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                )}

                {!token && (
                  <li>
                    <NavLink to="/login" onClick={() => setOpenMenu(false)}>
                      Login o Registrazione
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        )}

        <nav className="menu-desktop">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/equipment-booked">Equipment Booked</NavLink>
            </li>
            {token && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}

            {!token && (
              <li>
                <NavLink to="/login">Login o Registrazione</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
