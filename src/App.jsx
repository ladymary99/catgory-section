import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import CategorySection from "./components/CategorySection";

import "./App.css";

function App() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);

  return (
    <div className="app">
      <CategorySection />
    </div>
  );
}

export default App;
