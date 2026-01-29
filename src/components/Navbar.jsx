import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h1 style={{ color: "var(--primary-color)" }}>My Portfolio</h1>
      <button 
        className="theme-toggle" 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}

export default Navbar;