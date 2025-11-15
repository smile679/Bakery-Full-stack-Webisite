import { Outlet } from "react-router-dom";
import ShoppingHeader from "./Shopping-header";


function ShoppingLayout() {
  return ( 
    <div className="w-full min-h-screen flex flex-col">
      <ShoppingHeader />
      <Outlet />
    </div>
   );
}

export default ShoppingLayout;