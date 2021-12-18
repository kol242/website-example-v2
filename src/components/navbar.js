import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./navbar.css";
import { FaReact } from "react-icons/fa";
import { ExternalLink } from 'react-external-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaReact />React Website 
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <ExternalLink href="https://github.com/kol242" className="nav-links" onClick={closeMobileMenu}>
                  GitHub
                </ExternalLink>
              </li>
              <li className="nav-item">
                <ExternalLink
                  href="https://www.linkedin.com/in/valentino-kolinger-96236a19a/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  LinkedIn
                </ExternalLink>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">
              Portfolio
              </Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
