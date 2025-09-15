import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="menu">
        <div style={{ display: "flex", gap: "20px" }} className="menu-desktop">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
