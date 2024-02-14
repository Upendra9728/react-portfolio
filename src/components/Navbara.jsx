// Navbara.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./componentcss/navbar.css";

const Navbara = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav">
      <div className="navleft">
        <img src={require("../assets/navlogo.png")} alt="" className="img"/>
      </div>
      <div className="navright">
        <ul className="links">
          <li>
            <Link
              to="/Home"
              onClick={() => handleSetActiveLink("Home")}
              className={activeLink === "Home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleSetActiveLink("About")}
              className={activeLink === "About" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              onClick={() => handleSetActiveLink("Work")}
              className={activeLink === "Work" ? "active" : ""}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => handleSetActiveLink("Skills")}
              className={activeLink === "Skills" ? "active" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleSetActiveLink("Contact")}
              className={activeLink === "Contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbara;
