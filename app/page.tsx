import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Freetrial from "./components/Freetrial";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";

export default function Home() {
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Testimonials/>
    <Freetrial/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
