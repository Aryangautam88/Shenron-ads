
import React, { useState, useEffect, useRef } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./Navbar.css";

const services = [
  { name: "Forex Services", path: "/services/forex" },
  { name: "Crypto Services", path: "/services/crypto" },
  { name: "Comex Services", path: "/services/comex" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navbarRef = useRef(null);
  const location = useLocation();

  // Close all menus after navigation
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
      document.removeEventListener(
        "touchstart",
        handleClickOutside
      );
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header" ref={navbarRef}>
      <nav className="navbar" aria-label="Main navigation">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenus}
          aria-label="Billare Beacons home"
        >
          <span className="brand-mark" aria-hidden="true">
            SG
          </span>

          <span className="brand-name">
            Shenron
            Global
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`mobile-menu-toggle ${
            menuOpen ? "is-active" : ""
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-navigation"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setServicesOpen(false);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation links */}
        <div
          id="navbar-navigation"
          className={`navbar-navigation ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenus}
          >
            Home
          </NavLink>

          {/* Services dropdown */}
          <div
            className={`nav-dropdown ${
              servicesOpen ? "dropdown-open" : ""
            }`}
            onMouseEnter={() => {
              if (window.matchMedia("(min-width: 901px)").matches) {
                setServicesOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(min-width: 901px)").matches) {
                setServicesOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="nav-link dropdown-trigger"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() =>
                setServicesOpen((prev) => !prev)
              }
            >
              Services
              <svg
                className="dropdown-chevron"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="dropdown-menu">
              <div className="dropdown-heading">
                <span>OUR SERVICES</span>
                <p>Explore our expertise</p>
              </div>

              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  className={({ isActive }) =>
                    `dropdown-item ${
                      isActive ? "active" : ""
                    }`
                  }
                  onClick={closeMenus}
                >
                  <span>{service.name}</span>
                  <span className="dropdown-arrow" aria-hidden="true">
                    ↗
                  </span>
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/guide-to-kickstart"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenus}
          >
            Guide to Kickstart
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenus}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/exclusive-deals"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenus}
          >
            Exclusive Deals
          </NavLink>

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="navbar-cta"
            onClick={closeMenus}
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
