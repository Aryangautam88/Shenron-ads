
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import ForexSection from "./SubPages/Forex-Section";
import CryptoSection from "./SubPages/Crypto-Section";
import ComexServices from "./SubPages/Comex-Services";

import GuideToKickStart from "./Pages/guide-to-KickStart";
import FAQ from "./Pages/FAQ";

// Home page
function Home() {
  return (
    <>
      <ForexSection />
      <CryptoSection />
      <ComexServices />
      <GuideToKickStart />
      <FAQ />
    </>
  );
}

// Temporary pages for links whose page content is not ready yet
function PlaceholderPage({ title }) {
  return (
    <section className="route-placeholder">
      <h1>{title}</h1>
      <p>Content for this page will be added soon.</p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
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

        {/* Guide */}
        <Route
          path="/guide-to-kickstart"
          element={<GuideToKickStart />}
        />

        {/* FAQ */}
        <Route
          path="/faq"
          element={<FAQ />}
        />

        {/* Other Navbar links */}
        <Route
          path="/exclusive-deals"
          element={<PlaceholderPage title="Exclusive Deals" />}
        />

        <Route
          path="/contact"
          element={<PlaceholderPage title="Contact Us" />}
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<PlaceholderPage title="404 - Page Not Found" />}
        />
      </Routes>
    </>
  );
}
