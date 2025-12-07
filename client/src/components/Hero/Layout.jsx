import Home from "@/pages/Hero/Home";
import { Button } from "../ui/button";
import HeroHeader from "./HeroHeader";
import Rectangle21 from '../../assets/Rectangle-21.png'
import Rectangle20 from '../../assets/Rectangle-20.png'
import Rectangle22 from '../../assets/Rectangle-22.png'
import Rectangle23 from '../../assets/Rectangle-23.png'
import Rectangle24 from '../../assets/Rectangle-24.png'
import Rectangle25 from '../../assets/Rectangle-25.png'
import Footer from "@/pages/Hero/Footer";
import { useNavigate } from "react-router-dom";
import Services from "@/pages/Hero/Services";
import About from "@/pages/Hero/About";
import Featured from "@/pages/Hero/Featured";


const cakes = [Rectangle20, Rectangle21, Rectangle22, Rectangle23, Rectangle24, Rectangle25];


function HeroLayout() {
  const navigate = useNavigate();
  
  return (
    <section className="w-full">
      <div id="Home" 
        className="relative flex flex-col min-w-fit min-h-screen bg-[url('https://res.cloudinary.com/dineyc77u/image/upload/f_auto,q_auto/v1763410115/hero_tof3ls.png')] bg-cover bg-center bg-no-repeat">
        <HeroHeader />
        <Home />
        <svg className="absolute -bottom-4 sm:-bottom-5 left-0 w-full h-20 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#ffffff"></path>
        </svg>
      </div>
      <Services />
      <div className="relative min-w-fit h-[442px] flex flex-col items-center justify-center bg-[url('https://res.cloudinary.com/dineyc77u/image/upload/f_auto,q_auto/v1763411569/rectangle_jixztz.png')] bg-cover bg-left bg-no-repeat mb-20 ">
        <svg class="absolute -top-2 left-0 w-full h-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#ffffff"></path>
        </svg>
        <h1 className="text-6xl sm:text-7xl text-secondary font-sansita-swashed text-pretty text-center">
          20 % Off your,
          <br />
          First Order!
        </h1>
        <p className="text-gray-700 font-bold my-5 sm:my-10 text-pretty text-center text-xl px-5 ">
          A loaf of bread is one of the simplest things on Earth.
          <br /> It is also one of the most miraculous.
        </p>
        <Button 
         onClick={() => navigate("/shop/home")}
         className="w-50 h-12 bg-secondary text-white font-bold">
          Order Now
        </Button>
        <svg class="absolute -bottom-2 left-0 w-full h-10 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#ffffff"></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold font-sansita-swashed text-[#111111]">
          Explore More
        </h1>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 sm:px-10 py-20 sm:py-30 overflow-hidden">
        {
          cakes.map((cake, index) => (
            <img
              key={index}
              src={cake}
              className="w-full h-[250px] sm:h-[300px] rounded-2xl shadow-gray-500 shadow-sm object-cover"
            />
          ))
        }
        </div>
      </div>
      <About />
      <Featured />
      <Footer />
    </section>
  );
}

export default HeroLayout;