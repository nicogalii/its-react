import { NavLink } from "react-router";
import "./Navbar.css";
import useLoginApi from "../../hooks/useLoginApi";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const { logout, getToken } = useLoginApi();
  const [token, setToken] = useState(getToken());
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    // Aggiorna lo stato token ogni volta che cambia
    setToken(getToken());
  }, [getToken()]);

  const handleLogout = () => {
    logout();
    setOpenMenu(false);
  };

  return (
    <>
      <header>
        {/* Logo */}
        <NavLink to="/" onClick={() => setOpenMenu(false)} className="logo">
          <img src="/assets/images/logo.svg" alt="Logo di elite equipment" />
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
                    <button onClick={handleLogout}>
                      <img src="/assets/images/logout.svg" alt="logout" />
                    </button>
                  </li>
                )}

                {!token && (
                  <li className={"auth-btn"}>
                    <NavLink to="/login" onClick={() => setOpenMenu(false)}>
                      Login / Register
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
                <button onClick={handleLogout}>
                  <img src="/assets/images/logout.svg" alt="logout" />
                </button>
              </li>
            )}

            {!token && (
              <li className={"auth-btn"}>
                <NavLink to="/login">Login / Register</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
