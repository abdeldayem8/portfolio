import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <Link to="about" className="navbar-brand">
          {"<Mohamed/>"}
        </Link>
        <button
          onClick={toggleMenu}
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </span>
        </button>
        <div className={`collapse navbar-collapse collapse-transition ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link">
                <AnchorLink href="#about" onClick={handleLinkClick}>About</AnchorLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <AnchorLink href="#skills" onClick={handleLinkClick}>Skills</AnchorLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <AnchorLink href="#Projects" onClick={handleLinkClick}>Projects</AnchorLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <AnchorLink href="#contact" onClick={handleLinkClick} >Contact</AnchorLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

