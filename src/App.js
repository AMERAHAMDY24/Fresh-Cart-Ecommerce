import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
// import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import NotFound from './components/NotFound/NotFound';
import LogOut from './components/LogOut/LogOut';
import MyProfile from './components/MyProfile/MyProfile';
import AuthLayout from './Layouts/AuthLayout';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import ToggleCart from './components/ToggleCart/ToggleCart';
import Address from './components/Address/Address';
import ForgetPassword from './components/ForgotPassword/ForrgetPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import SpecificCategory from './components/SpecificCategory/SpecificCategory';
import { Suspense, lazy } from 'react';

// lazy loading
const Home= lazy(() => import('./components/Home/Home'));



function App() {


  const routes=createHashRouter([
{path:'/',element:<MainLayout/>,children:[
  {index:true,element:<ProtectedRoutes><MyProfile/></ProtectedRoutes>},
  {path:'Home',element:<ProtectedRoutes><Suspense fallback={"/Loader"}><Home/></Suspense></ProtectedRoutes>},
  {path:'Products',element:<ProtectedRoutes><Products/></ProtectedRoutes>},
  {path:'Cart',element:<ProtectedRoutes><Cart/></ProtectedRoutes>},
  {path:'MyProfile',element:<ProtectedRoutes><MyProfile/></ProtectedRoutes>},

  {path:'Categories',element:<ProtectedRoutes><Categories/></ProtectedRoutes>},
  {path:'SpecificCategory/:id',element:<ProtectedRoutes><SpecificCategory/></ProtectedRoutes>},

  {path:'Brands',element:<ProtectedRoutes><Brands/></ProtectedRoutes>},
  // {path:'Logout',element:<AuthLayout/>},
  {path:'Product-Details/:id',element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes>},
  {path:"Address/:id",element:<ProtectedRoutes><Address/></ProtectedRoutes>},


  {path:'*',element:<NotFound/>}
  
]}
,
  {

path:"/",element:<AuthLayout/>
,children:[

  {path:'SignUp',element:<SignUp/>},
  {path:'Login',element:<Login/>},
  {path:'ForgetPassword',element:<ForgetPassword/>},
  {path:'ResetPassword',element:<ResetPassword/>}

]}

])
  return <>
  <CartContextProvider>

  <RouterProvider router={routes}/>
  </CartContextProvider>
<ToastContainer theme='colored' autoClose={700 }/>
  </>
}

export default App;
