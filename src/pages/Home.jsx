import AboutSection from "../components/AboutSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductsGallery from "../components/ProductGallery";
import ProductUniverse from "../components/ProductUniverse/ProductUniverse";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <FeaturedProducts /> */}
      {/* <ProductUniverse /> */}
      <AboutSection />
      <WhyChooseUs />
      <ProductsGallery />
    </>
  );
};

export default Home;