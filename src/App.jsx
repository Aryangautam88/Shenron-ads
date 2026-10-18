import React from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import ForexSection from "./SubPages/Forex-Section";
// import CryptoSection from './SubPages/Crypto-Section';
// import ComexServices from './SubPages/Comex-Services';
// import GuideToKickStart from './Pages/guide-to-KickStart';
import FAQ from './Pages/FAQ';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
      {/* <ForexSection /> */}
      {/* <CryptoSection/> */}
      {/* <ComexServices/> */}
      {/* <GuideToKickStart/> */}
      <FAQ/>

    </>
  );
}

export default App;
