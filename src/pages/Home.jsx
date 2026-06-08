import AboutSection from "../components/AboutSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductsGallery from "../components/ProductGallery";
import ProductUniverse from "../components/ProductUniverse/ProductUniverse";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <FeaturedProducts /> */}
      {/* <ProductUniverse /> */}
      <AboutSection />
      <ProductsGallery />
    </>
  );
};

export default Home;