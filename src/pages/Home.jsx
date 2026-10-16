
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-hero">
      <div className="home-hero-inner">

        {/* Left: Hero content */}
        <div className="hero-left">
          <span className="hero-eyebrow">
            FEEL THE WEALTH
          </span>

          <h1 className="hero-title">
            Improve Your Investment
            <br className="desktop-break" />
            Knowledge With Our
            <br className="desktop-break" />
            Expert Team.
          </h1>

          <Link
            to="/services/forex"
            className="hero-button"
          >
            Explore Our Services
            <span aria-hidden="true">→</span>
          </Link>

          {/* Dashboard illustration */}
          <div className="hero-dashboard">
            <img
              src="/images/hero-dashboard.png"
              alt="Investment dashboard showing balance, transactions and market charts"
            />
          </div>
        </div>

        {/* Right: Decorative rings and description */}
        <div className="hero-right">
          <div className="hero-rings">
            <img
              src="/images/hero-rings.png"
              alt=""
              aria-hidden="true"
            />
          </div>

          <p className="hero-description">
            We offer daily Crypto and
            Forex market insights based
            on technical analysis and
            relevant indicators.
          </p>
        </div>

      </div>
    </main>
  );
}

export default Home;
