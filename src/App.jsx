
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import ForexSection from "./SubPages/Forex-Section";
import CryptoSection from "./SubPages/Crypto-Section";
import ComexServices from "./SubPages/Comex-Services";

import GuideToKickStart from "./Pages/guide-to-KickStart";
import FAQ from "./Pages/FAQ";


function Home() {
  return (
    <main>
      <h1>Welcome to Shenron Global</h1>
      <p>Explore our Forex, Crypto and Comex services.</p>
    </main>
  );
}

function Service() {
  return (
    <main>
      <h1>Our Services</h1>
      <p>Explore our services and find the right solution for you.</p>
    </main>
  );
}

function PlaceholderPage({ title }) {
  return (
    <main className="route-placeholder">
      <h1>{title}</h1>
      <p>Content for this page will be added soon.</p>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Service Page */}
        <Route path="/service" element={<Service />} />

        {/* Individual Service Pages */}
        <Route
          path="/services/forex"
          element={<ForexSection />}
        />

        <Route
          path="/services/crypto"
          element={<CryptoSection />}
        />

        <Route
          path="/services/comex"
          element={<ComexServices />}
        />

        {/* Other Pages */}
        <Route
          path="/guide-to-kickstart"
          element={<GuideToKickStart />}
        />

        <Route path="/faq" element={<FAQ />} />

        <Route
          path="/exclusive-deals"
          element={<PlaceholderPage title="Exclusive Deals" />}
        />

        <Route
          path="/contact"
          element={<PlaceholderPage title="Contact Us" />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<PlaceholderPage title="404 - Page Not Found" />}
        />
      </Routes>
    </>
  );
}
