import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          SK<span>.</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={closeMenu}>
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="resume-button"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
