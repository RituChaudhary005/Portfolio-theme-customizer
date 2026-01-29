import React from "react";
import { motion } from "framer-motion";

function ThemeCustomizer({ theme, setTheme, primaryColor, setPrimaryColor }) {
  return (
    <motion.div 
      className="theme-customizer"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h3>🎨 Theme Customizer</h3>
      
      <div>
        <label>Mode: </label>
        <button 
          className={theme === "light" ? "active" : ""} 
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button 
          className={theme === "dark" ? "active" : ""} 
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      </div>

      <div>
        <label>Primary Color: </label>
        <input 
          type="color" 
          value={primaryColor} 
          onChange={(e) => setPrimaryColor(e.target.value)} 
        />
      </div>
    </motion.div>
  );
}

export default ThemeCustomizer;