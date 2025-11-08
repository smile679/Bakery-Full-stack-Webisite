import { Button } from "@/components/ui/button";
import Rectangle20 from '../../assets/Rectangle-20.png'
import Rectangle21 from '../../assets/Rectangle-21.png'
import Rectangle22 from '../../assets/Rectangle-22.png'
import Rectangle23 from '../../assets/Rectangle-23.png'
import Rectangle24 from '../../assets/Rectangle-24.png'
import Rectangle25 from '../../assets/Rectangle-25.png'
import Footer from "@/pages/shopping-view/Footer";
import { useNavigate } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Featured from "../shopping-view/Featured";
import ShoppingHeader from "@/components/shopping-view/Shopping-header";

function Home() {
  const cakes = [Rectangle20, Rectangle21, Rectangle22, Rectangle23, Rectangle24, Rectangle25];
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/shop/home");
  }

  return (
    <section className="relative  w-full flex flex-col">
        <ShoppingHeader />
      <div id="Home" className="relative w-full min-h-screen mt-18 bg-[url(@/assets/hero.png)] bg-cover bg-center">
        <div className="flex flex-col ml-10 sm:ml-20 mt-20 ">
          <div>
            <p className="text-2xl text-secondary-foreground font-semibold">
              Delicious Cafe
            </p>
            <h1 className="text-5xl min-[375px]:text-6xl sm:text-8xl text-white font-sansita-swashed">
              Sweet Treats,<br/>Perfect Eats
            </h1>
          </div>
          <div className="flex items-center mt-50 sm:mt-10 md:mt-20 gap-5">
            <Button
            onClick={handleShopNow}
            className='w-30 h-11 bg-secondary hover:bg-secondary/80 text-white font-bold cursor-pointer'>
              Shop Now
            </Button>
            <Button
              onClick={handleShopNow}
              variant='outline' className='w-30 h-11 text-secondary font-bold cursor-pointer'
            >
              Order Now
            </Button>
          </div>
          <svg class="absolute -bottom-4 left-0 w-full h-20 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>
      <Services />
      <div className="relative min-w-fit h-[442px] flex flex-col items-center justify-center bg-[url(@/assets/rectangle.png)] bg-cover bg-left mb-20 ">
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
         onClick={() => navigate("/shop/listing")}
         className="w-50 h-12 bg-secondary text-white font-bold">
          Order Now
        </Button>
        <svg class="absolute -bottom-2 left-0 w-full h-10 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#ffffff"></path>
        </svg>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-sansita-swashed text-[#111111]">
          Explore More
        </h1>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 sm:px-10 py-25 sm:py-20 overflow-hidden">
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

export default Home;