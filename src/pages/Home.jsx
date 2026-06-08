import AboutSection from "../components/AboutSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductsGallery from "../components/ProductGallery";
import ProductUniverse from "../components/ProductUniverse/ProductUniverse";
import Testimonials from "../components/Testimonials";
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
      <Testimonials />
    </>
  );
};

export default Home;