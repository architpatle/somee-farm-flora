import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products"
import AboutUs from "./pages/AboutUs";
import Quality from "./pages/Quality";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/quality" element={<Quality />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;