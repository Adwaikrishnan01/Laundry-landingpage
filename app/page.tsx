import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
     <Navbar/>
    <Hero/>
    <About/>
    <Testimonials/>
    </>
  );
}
