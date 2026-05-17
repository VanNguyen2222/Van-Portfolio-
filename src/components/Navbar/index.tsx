import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/logo.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import clsx from "clsx";
import { Link } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Nav() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skill" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <header className={clsx("nav", isMenuOpen && !isDesktop && "overlay")}>
      <div className="nav-inner">
        <a className="logo" style={{color: isMenuOpen && !isDesktop ? 'white' : 'black'}} href="#home">
          <img src={logo} alt="Logo" />
          Van Nguyen
        </a>
        <div className="menu-desktop">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="menu-mobile">
        {isMenuOpen ? (
          <CloseIcon onClick={handleMenuClick} />
        ) : (
          <MenuIcon onClick={handleMenuClick} />
        )}
      </div>
    </header>
  );
}
