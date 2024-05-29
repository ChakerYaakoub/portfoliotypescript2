import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { HeaderProps, useHeader } from "./useHeader";

const Header: React.FC<HeaderProps> = (props) => {
  const { data, navItems } = useHeader(props);
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderActive, setHeaderActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
      <div className="container">
        <Link to={"/"}>
          <img
            src={data.userInfo[0].logoPath}
            alt="Logo"
            className="logoImage"
          />
        </Link>

        <nav className={`navbar ${isNavbarActive ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            {navItems.map((item, index) => (
              <li key={index}>
                {/* <Link
                  to={item.href}
                  className="navbar-link"
                  data-nav-link
                  onClick={closeNavbar}
                >
                  {item.text}
                </Link> */}

                <li>
                  <a
                    href={item.href}
                    className="navbar-link"
                    data-nav-link
                    onClick={closeNavbar}
                  >
                    {item.text}
                  </a>
                </li>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`nav-toggle-btn ${isNavbarActive ? "active" : ""}`}
          aria-label="toggle menu"
          data-nav-toggler
          onClick={toggleNavbar}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
