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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
