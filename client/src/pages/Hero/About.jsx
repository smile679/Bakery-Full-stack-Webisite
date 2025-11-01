import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();
  return ( 
    <div id='About' className="min-w-fit h-[442px] flex flex-col items-center justify-center bg-[url(@/assets/about.png)] bg-cover bg-right mb-5 sm:mb-20 ">
        <h1 className="text-white text-5xl font-sansita-swashed text-pretty text-center font-bold text-shadow-gray-600 text-shadow-sm">
          About Us
        </h1>
        <p className="text-muted font-semibold my-5 sm:my-6 text-pretty text-center text-xl px-5 text-shadow-gray-600 text-shadow-sm">
          We are a small bakery dedicated to providing 
          <br /> the best baked goods made with love and care.
        </p>
        <div className="flex max-sm:flex-col gap-5">
          <p className="text-chart-5 font-semibold text-shadow-gray-800 text-shadow-sm">Phone - (+251) 326-1234</p>
          <p className="text-chart-5 font-semibold text-shadow-gray-800 text-shadow-sm">Email - info@example.com</p>
        </div>
        <p className="text-chart-5 mb-5 font-semibold text-shadow-gray-800 text-shadow-sm">south 13th street</p>
        <Button
          onClick={() => navigate("/about")}
          className="w-50 h-12 bg-secondary text-white font-bold">
          Read More
        </Button>
      </div>
   );
}

export default About;