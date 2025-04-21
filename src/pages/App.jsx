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
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location.pathname, navigationType]);

  return children;
};

const App = () => {
  return (
    <LayoutProvider>
      <div
        className="flex flex-col w-full"
        id="main-content"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <BrowserRouter>
          <ScrollToTop>
            <div className="flex-grow bg-neutral-50">
              <NavBar />
              <a
                href="https://wa.me/918178759588"
                target="_blank"
                className="fixed md:right-7 md:bottom-7 right-4 bottom-4 w-12 h-12 md:w-16 md:h-16 cursor-pointer z-50"
                rel="noreferrer"
              >
                <WhatsappIcon />
              </a>
              <Routes>
                <Route path="/" element={<Home />} errorElement="error" />
                <Route
                  path="*"
                  element={<NotFound />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path="/privacy-policy"
                  element={<PrivacyPolicy />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path="/hidden-contact-table"
                  element={<Users />}
                  errorElement={<ErrorPage />}
                />
              </Routes>
              <Footer />
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </LayoutProvider>
  );
};

export default App;
