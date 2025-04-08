import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Test from "@/components/Test";
import { useMediaQuery } from "@/hooks/use-media-query";
import Contact from "./Contact";
import WhatsappIcon from "@/svgComponents/WhatsappIcon";

const App = () => {
  const isMobile = useMediaQuery();
  return (
    <div
      className={`w-full overflow-auto md:h-auto h-[100dvh] overflow-x-hidden ${
        isMobile && "scrollbar-hide"
      }`}
    >
      <BrowserRouter>
        <NavBar />
        <div className="mt-[var(--navbar-height)]  bg-neutral-50">
          <a
            href="https://wa.me/918178759588"
            target="_blank"
            className="fixed md:right-7 md:bottom-7 right-4 bottom-4 w-16 h-16 cursor-pointer z-50"
          >
            <WhatsappIcon />
          </a>
          <Routes>
            <Route path="/" element={<Home />} errorElement="error" />
            <Route path="/contact" element={<Contact />} errorElement="error" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
