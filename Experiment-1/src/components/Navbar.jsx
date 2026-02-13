const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <div className="logo">ReactSPA</div>
      <div className="nav-links">
        <button className="nav-btn" onClick={() => setPage("home")}>Home</button>
        <button className="nav-btn" onClick={() => setPage("about")}>About</button>
        <button className="nav-btn" onClick={() => setPage("contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;