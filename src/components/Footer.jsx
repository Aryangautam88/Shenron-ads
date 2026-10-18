
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const services = [
  { name: "Forex Services", path: "/services/forex" },
  { name: "Comex Services", path: "/services/comex" },
  { name: "Crypto Services", path: "/services/crypto" },
];

const socialLinks = [
  { name: "Facebook", symbol: "f", className: "facebook", url: "https://facebook.com" },
  { name: "X", symbol: "𝕏", className: "twitter", url: "https://x.com" },
  { name: "Telegram", symbol: "➤", className: "telegram", url: "https://telegram.org" },
  { name: "Instagram", symbol: "◎", className: "instagram", url: "https://instagram.com" },
  { name: "YouTube", symbol: "▶", className: "youtube", url: "https://youtube.com" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks for your interest! Newsletter integration is not connected yet.");
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand-column">
          <Link to="/" className="footer-brand" aria-label="Shenron Global home">
            <span className="footer-brand-mark">SG</span>

            <span className="footer-brand-name">
              Shenron
              <br />
              Global
            </span>
          </Link>
        </div>

        {/* Services */}
        <div className="footer-column footer-services">
          <h2 className="footer-heading">OUR SERVICES</h2>

          <ul className="footer-links">
            {services.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column footer-social">
          <h2 className="footer-heading">
            Follow us on Social
            <br className="desktop-break" /> Media
          </h2>

          <div className="footer-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`footer-social-icon ${social.className}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                <span aria-hidden="true">{social.symbol}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-column footer-newsletter">
          <h2 className="newsletter-title">Newsletter</h2>

          <p className="newsletter-description">
            Get the latest market insights and updates.
          </p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setMessage("");
              }}
              required
            />

            <button type="submit" className="newsletter-button">
              Subscribe <span aria-hidden="true">→</span>
            </button>

            {message && (
              <p className="newsletter-message" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shenron Global. All rights reserved.
        </p>

        <Link to="/faq">Help &amp; FAQ</Link>
      </div>
    </footer>
  );
}

export default Footer;
