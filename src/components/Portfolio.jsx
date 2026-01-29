import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Website", desc: "React + Tailwind + Stripe" },
  { title: "Recipe Finder App", desc: "API integration + search" },
  { title: "Portfolio Theme Customizer", desc: "Interactive UI with React" }
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 style={{ color: "var(--primary-color)" }}>Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;