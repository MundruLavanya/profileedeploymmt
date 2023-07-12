import Menu from "./LandingPage/Menu";
import Hero from "./LandingPage/Hero";
import Collections from "./LandingPage/Collections";
import Discount from "./LandingPage/Discount";
import HappyCustomer from "./LandingPage/HappyCustomer";
import About from "./LandingPage/About";
import Footer from "./LandingPage/Footer";
import "./assets/css/style.css";
function LandingPage() {
  return (
    <div className="bodyyy">
      <Menu />
      <Hero />
      <Collections />
      <Discount />
      <HappyCustomer />
      <About />
      <Footer />
    </div>
  );
}
export default LandingPage;
