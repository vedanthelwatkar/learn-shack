import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Test from "@/components/Test";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <div className="mt-[var(--navbar-height)]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} errorElement="error" />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </div>
  );
};

export default App;
