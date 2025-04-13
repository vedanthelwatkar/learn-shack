import Home from "./Home";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useMediaQuery } from "@/hooks/use-media-query";
import Contact from "./Contact";
import WhatsappIcon from "@/svgComponents/WhatsappIcon";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]);

  return children;
};

const App = () => {
  const isMobile = useMediaQuery();

  return (
    <div
      className={`w-full overflow-auto h-[100dvh] overflow-x-hidden ${
        isMobile && "scrollbar-hide"
      }`}
      id="main-content"
    >
      <BrowserRouter>
        <ScrollToTop>
          <NavBar />
          <div className="bg-neutral-50">
            <a
              href="https://wa.me/918178759588"
              target="_blank"
              className="fixed md:right-7 md:bottom-7 right-4 bottom-4 w-16 h-16 cursor-pointer z-50"
            >
              <WhatsappIcon />
            </a>
            <Routes>
              <Route path="/" element={<Home />} errorElement="error" />
              <Route
                path="/contact"
                element={<Contact />}
                errorElement="error"
              />
            </Routes>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
