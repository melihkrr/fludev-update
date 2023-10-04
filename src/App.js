import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import WOW from "wow.js";
import { useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import SSS from "./pages/SSS/SSS";
import Contact from "./pages/Contact/Contact";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/sss" element={<SSS/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
