import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();
  return ( 
    <div id='About' className="relative min-w-fit h-[442px] flex flex-col items-center justify-center bg-[url('https://res.cloudinary.com/dineyc77u/image/upload/f_auto,q_auto/v1763411640/about_p8stj2.png')] bg-cover bg-right mb-5 sm:mb-20 ">
      <svg class="absolute -top-3 left-0 w-full h-15" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#ffffff"></path>
      </svg>
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
      <svg class="absolute -bottom-3 left-0 w-full h-15 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#ffffff"></path>
      </svg>
    </div>
   );
}

export default About;