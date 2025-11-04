import { Navigate, useLocation } from "react-router-dom";


function CheckAuth({ isAuthenticated, user, children}) {
  const location = useLocation()
  console.log( location.pathname, isAuthenticated, user?.role);
  

    if(!isAuthenticated && 
      (
        location.pathname.includes('/shop') ||
        location.pathname.includes('/admin'))
      ){
     return <Navigate to='/auth/login' replace/>
   }

   if(isAuthenticated && 
   ( location.pathname.includes('/auth/login') ||
    location.pathname.includes('/auth/register'))
  ){
    if(user?.role === 'admin'){
      return <Navigate to='/admin/dashboard' replace/>
    } else{
      return <Navigate to='/shop/home' replace/>
    }
   }

   if(isAuthenticated && location.pathname === "/" ){
    if(user?.role === 'admin'){
      return <Navigate to='/admin/dashboard' replace/>
    } else {
      return <Navigate to='/shop/home' replace/>
    }
   }


   if(isAuthenticated && user?.role !== 'admin' &&
    location.pathname.includes('/admin') ){
    return <Navigate to='/shop/home' replace/>
   }

   if(isAuthenticated && user?.role !== 'user' &&
    location.pathname.includes('/shop') ){
    return <Navigate to='/admin/dashboard' replace/>
   }

  return (
    <div>
      {children}
    </div>
   );
}

export default CheckAuth;