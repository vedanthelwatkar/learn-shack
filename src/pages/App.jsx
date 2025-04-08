import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Test from "@/components/Test";
import { useMediaQuery } from "@/hooks/use-media-query";
import Contact from "./Contact";

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
        <div className="mt-[var(--navbar-height)]">
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
