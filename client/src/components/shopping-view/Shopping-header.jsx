import { Link } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/backery-logo.png";
import { Fragment, useState} from "react";
import { LogIn, LogOut, Menu, ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";


function ShoppingHeader() {
  const navbar = [
    {
      id: "Home",
      link: "/home",
    },
    {
      id: "About",
      link: "/about",
    },
    {
      id: "Services",
      link: "/services",
    },
    {
      id: "Contact",
      link: "/contact",
    }
  ];
  const navigate = useNavigate();
  const [ open, setOpen] = useState(null);
  const isAuthenticated = false; // Replace with actual authentication logic

  function handleLogout() {
    // Implement logout logic here
    console.log("User logged out");
    navigate("/auth/login");
  }

  return (
    <header className="w-full py-2 bg-[url(@/assets/footer.png)] bg-cover bg-center fixed top-0 left-0 z-50 shadow-gray-950 shadow-md">
      <Fragment>
        <nav className="w-full flex justify-between items-center px-5 md:px-10 sm:mr-10">
          <div className="w-full flex items-center">
              <RouterLink to="/">
                <img src={logo} className="w-14 h-14 ml-5 sm:ml-0 cursor-pointer box-shadow-gray-800"/>
              </RouterLink>
            <ul className="hidden sm:flex sm:mr-5">
              {navbar &&
                navbar.map((item) => (
                  <li>
                    <Link
                      to={item.id}
                      className="text-white hover:text-gray-300 hover:scale-x-115 text-xl font-bold ml-5 lg:ml-10 text-shadow-black text-shadow-sm cursor-pointer"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-70}
                    >
                      {item.id}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <button 
              onClick={() => navigate("/auth/login")}
              className="flex items-center text-white text-xl font-bold hover:text-gray-200 py-2 rounded-md transition duration-300 text-shadow-black text-shadow-sm cursor-pointer"
              >
              <ShoppingCart size="35px" className="mr-1 md:mr-5"/>
            </button>
            <button 
              onClick={() => navigate("/auth/login")}
              className="hidden sm:flex items-center text-white text-xl font-bold hover:text-gray-200 py-2 rounded-md transition duration-300 text-shadow-black text-shadow-sm cursor-pointer"
              >
                Logout 
              <LogOut size="25px" className="ml-2"/>
            </button>
          </div>
          <div className="sm:hidden">
            <DropdownMenu open={open} onOpenChange={setOpen} >
              <DropdownMenuTrigger>
                <Menu
                  size="40px"
                  stroke-width="3px"
                  className="text-white mx-5 hover:none"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 bg-secondary text-white border border-gray-700 rounded-md shadow-lg">
                {navbar &&
                  navbar.map((item, index) => (
                    <div key={item.id}>
                      <DropdownMenuItem asChild>
                        <Link
                          to={item.id}
                          className="block w-full py-2 px-4 text-base hover:bg-gray-800"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-70}
                        >
                          {item.id}
                        </Link>
                      </DropdownMenuItem>
                        {index !== navbar.length - 1 && <DropdownMenuSeparator />
                      }
                    </div>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button 
                      onClick={() => handleLogout()}
                      className="flex items-center text-white text-base hover:bg-gray-800 px-2 py-2 cursor-pointer"
                      >
                        Logout
                      <LogOut className="ml-2" />
                    </button>
                  </DropdownMenuItem>
                  {
                    isAuthenticated ? (
                      <>
                        <DropdownMenuSeparator />
                            <DropdownMenuItem>
                          <button 
                            onClick={() => navigate("/auth/logout")}
                            className="flex items-center text-white text-base hover:bg-gray-800 px-2 py-2 cursor-pointer"
                            >
                              Logout
                            <LogOut className="ml-2" />
                          </button>
                        </DropdownMenuItem>
                      </>
                    ) : null
                  }
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </Fragment>
    </header>
  );
}

export default ShoppingHeader;