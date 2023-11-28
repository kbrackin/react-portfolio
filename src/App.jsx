import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import ErrorPage from "./routes/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
    }
]);

function App() {
    return (
      <div>
        <Navigation />
        <></>
        <RouterProvider router={router} />
        <></>
        <Footer />
      </div>
    );
  }

export default App