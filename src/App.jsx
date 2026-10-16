import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import ForexSection from "./SubPages/Forex-Section";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
      {/* <ForexSection /> */}
    </>
  );
}

export default App;
