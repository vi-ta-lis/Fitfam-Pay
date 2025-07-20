import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/join", element: <SignUp />, errorElement: <Error /> },
  { path: "/contact", element: <Contact />, errorElement: <Error /> },
  { path: "/about", element: <About />, errorElement: <Error /> },
  { path: "/signin", element: <SignIn />, errorElement: <Error /> },

  // Assuming Contact.jsx is used for both About and Contact pages
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
