import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="logo">
          {/* <img src="./assets/images/logo.svg" alt="Logo di ..." /> */}
          <p>ciao</p>
        </div>
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <img
              src="./assets/svg/hamburger.svg"
              alt="Menu di navigazione"
              id="hamburger"
            />
          </label>
          <div className="nav-mobile">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/equipment-booked">Equipment Booked</a>
              </li>
              <li>
                <a href="/login">Login o Registrazione</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
