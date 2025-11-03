import { Route, Routes } from "react-router";
import CheckAuth from "./components/common/CheckAuth";
import HeroLayout from "./components/Hero/Layout";
import AuthLayout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ShoppingLayout from "./components/shopping-view/Layout";
import AdminLayout from "./components/admin-view/Layout";
import Orders from "./pages/admin-view/Orders";
import NotFound from "./components/not-found/Layout";
import Dashboard from "./pages/admin-view/Dashboard";
import Home from "./pages/shopping-view/Home";
import Listing from "./pages/shopping-view/Listing";
import { useEffect } from "react";

function App() {

  useEffect(()=>{

  },[dispatch])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <HeroLayout />
          </CheckAuth>
        }
      />
      <Route
        path="/auth"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        path="/shop"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="listing" element={<Listing />} />
      </Route>
      <Route
        path="/admin"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="*" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <NotFound />
        </CheckAuth>
      }/>
    </Routes>
  );
}

export default App;
