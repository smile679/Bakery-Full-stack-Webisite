import { Link } from "react-scroll";
import bakeryLogo from "../../assets/backery-logo.png";
import fb from "../../assets/fb.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import whatsApp from "../../assets/whatsApp.png";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer id="Contact" className="w-full">
      <div className="min-w-fit h-[500px] flex flex-col justify-between bg-[url(@/assets/footer.png)] bg-cover bg-center px-3 sm:px-10 py-5">
        <div className="w-full max-w-7xl mx-auto flex max-sm:flex-col justify-between items-center py-4 sm:py-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer max-sm:mb-5 items-center"
          >
            <img
              src={bakeryLogo}
              alt="Bakery Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>
          <div className="flex max-sm:flex-col items-center">
            <h2 className="text-xl text-chart-5 font-bold sm:mr-10">Follow us</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="Facebook" className="w-10 h-10"/>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="w-10 h-10" />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pinterest} alt="Pinterest" className="w-10 h-10" />
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsApp} alt="WhatsApp" className="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
        <Separator className="bg-chart-5 mx-auto w-11/12" />
        <div className="w-full flex justify-evenly items-center mt-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl text-chart-5 font-bold">About Us</h1>
            <p className="text-white font-semibold">(+251) 326-1234</p>
            <p className="text-white font-semibold">info@example.com</p>
            <p className="text-white font-semibold">south 13th street</p>
            <p className="text-white font-semibold">Ethiopia, Addis Ababa</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl text-chart-5 font-bold">Explore</h1>
            <Link to="Home" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <p className="text-white font-semibold">Home</p>
            </Link>
            <Link to="About" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <p className="text-white font-semibold">About</p>
            </Link>
            <Link to="Contact Us" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <p className="text-white font-semibold">Contact Us</p>
            </Link>
            <Link to="Services" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <p className="text-white font-semibold">Services</p>
            </Link>
          </div>
          <div className="hidden sm:flex flex-col gap-3">
            <h1 className="text-xl text-chart-5 font-bold">Recent News</h1>
            <p className="text-white font-semibold">New Bakery Opening</p>
            <p className="text-white font-semibold">Special Discounts Available</p>
            <p className="text-white font-semibold">Customer Testimonials</p>
            <p className="text-white font-semibold">Behind the Scenes</p>
          </div>
        </div>
        <div className="w-full text-center mt-8 sm:mt-15">
          <p className="text-white font-semibold">
            &copy; 2025 Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;