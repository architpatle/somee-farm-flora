import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products"
import AboutUs from "./pages/AboutUs";
import AboutUsVP from "./pages/AboutUsVP";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import ContactDB from "./pages/ContactDB";

import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/about-us-vp" element={<AboutUsVP />} /> */}
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-db" element={<ContactDB />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;