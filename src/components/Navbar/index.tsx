import React from "react";
import "./index.css";
import logo from "../../assets/logo.jpg";

export default function Nav() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skill" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="logo" href="#home">
          <img src={logo} alt="Logo" className="logo" />
          Van Nguyen
        </a>
        <div className="menu-desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
