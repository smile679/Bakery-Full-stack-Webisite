import { Outlet } from "react-router-dom";


function ShoppingLayout() {
  return ( 
    <div className="w-full min-h-screen flex flex-col">
      <Outlet />
    </div>
   );
}

export default ShoppingLayout;