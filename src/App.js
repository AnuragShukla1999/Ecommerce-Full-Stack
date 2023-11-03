import React from 'react';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import CartPage from './Pages/CartPage';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './Pages/Checkout';
import ProductDetailPage from './Pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
  }
]);




function App() {
  return (
    <div className='App'>
        {/* <Home></Home> */}
        {/* <LoginPage></LoginPage> */}
        {/* <SignupPage></SignupPage> */}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
