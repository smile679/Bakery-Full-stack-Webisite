import { Outlet } from "react-router-dom";
import ShoppingHeader from "./shopping-header";


function ShoppingLayout() {
  return ( 
    <div className="w-full min-h-screen flex flex-col">
      <Outlet />
    </div>
   );
}

export default ShoppingLayout;