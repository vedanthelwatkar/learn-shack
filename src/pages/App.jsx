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
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import ErrorPage from "./ErrorPage";
import NotFound from "./NotFound";
import { LayoutProvider } from "@/context/LayoutContext";
import { getS3 } from "@/store/useConstantsStore";
import Users from "./Users";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    getS3(
      {
        bucketName: "learn-shack-new-bucket",
        prefix: "public/",
      },
      { variable: "constantImages" }
    );
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const mainContent = document.getElementById("content-scroll-container");
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]);

  return children;
};

const App = () => {
  const isMobile = useMediaQuery();

  // For mobile, we need to handle scrolling differently
  if (isMobile) {
    return (
      <LayoutProvider>
        <div className="flex flex-col min-h-screen w-full">
          <BrowserRouter>
            <ScrollToTop>
              <NavBar />
              <div
                style={{ marginTop: "var(--navbar-height, 60px)" }}
                className="flex-1 w-full bg-neutral-50"
              >
                <a
                  href="https://wa.me/918178759588"
                  target="_blank"
                  className="fixed md:right-7 md:bottom-7 right-4 bottom-4 w-12 h-12 md:w-16 md:h-16 cursor-pointer z-50"
                >
                  <WhatsappIcon />
                </a>
                <Routes>
                  <Route path="/" element={<Home />} errorElement="error" />
                  {/* Other routes */}
                </Routes>
                <Footer />
              </div>
            </ScrollToTop>
          </BrowserRouter>
        </div>
      </LayoutProvider>
    );
  }

  // For desktop, keep the original approach
  return (
    <LayoutProvider>
      <div className="flex flex-col h-screen w-full">
        <BrowserRouter>
          <ScrollToTop>
            <NavBar />
            <div
              id="content-scroll-container"
              className="flex-1 overflow-y-auto overflow-x-hidden"
            >
              <div className="bg-neutral-50 min-h-full">
                <a
                  href="https://wa.me/918178759588"
                  target="_blank"
                  className="fixed md:right-7 md:bottom-7 right-4 bottom-4 w-12 h-12 md:w-16 md:h-16 cursor-pointer z-50"
                >
                  <WhatsappIcon />
                </a>
                <Routes>
                  <Route path="/" element={<Home />} errorElement="error" />
                  {/* Other routes */}
                </Routes>
                <Footer />
              </div>
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </LayoutProvider>
  );
};

export default App;
