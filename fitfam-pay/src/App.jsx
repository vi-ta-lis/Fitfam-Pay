import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/join", element: <SignUp /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> }, // Assuming Contact.jsx is used for both About and Contact pages
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
