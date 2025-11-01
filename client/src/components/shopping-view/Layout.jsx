import { Outlet } from "react-router-dom";
import ShoppingHeader from "./shopping-header";


function ShoppingLayout() {
  return ( 
    <div className="relative w-full min-h-screen flex flex-col">
      <ShoppingHeader />
      <Outlet />
    </div>
   );
}

export default ShoppingLayout;