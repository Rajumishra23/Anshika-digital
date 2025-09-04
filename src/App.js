import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DigitalMarketing from "./pages/DigitalMarketing";
import VideoEditing from "./pages/VideoEditing";
import GraphicDesigning from "./pages/GraphicDesigning";

const App = () => {
  return (
    <>
      <Navbar /> {/* Navbar only here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
      </Routes>
    </>
  );
};

export default App;
