import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ThemeCustomizer from "./components/Themecustomizer";
import "./styles.css";

function App() {
  // Load saved preferences from localStorage
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [primaryColor, setPrimaryColor] = useState(() => localStorage.getItem("primaryColor") || "#4CAF50");

  // Save preferences whenever they change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("primaryColor", primaryColor);
  }, [theme, primaryColor]);

  return (
    <div className={`app ${theme}`} style={{ "--primary-color": primaryColor }}>
      <Navbar />
      <Portfolio />
      <ThemeCustomizer 
        theme={theme} 
        setTheme={setTheme} 
        primaryColor={primaryColor} 
        setPrimaryColor={setPrimaryColor} 
      />
    </div>
  );
}

export default App;