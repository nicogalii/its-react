import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <p>Logo</p>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/equipment-booked">Equipment Booked</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
