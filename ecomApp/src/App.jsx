import './App.css'
import HomePage from './Pages/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import CartPage from './Pages/CartPage';
import CheckOutPage from './Pages/CheckOutPage';

import ProductDetailPage from './Pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/checkout',
    element: <CheckOutPage />
  },
  {
    path: '/product-details',
    element: <ProductDetailPage />
  }

]);

function App() {

  return (
    <div className='bg-blue-300'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
