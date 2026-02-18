import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CompanyPage from "./pages/companyPage";
import LiveDiversity from "./pages/LiveDiversity";
import Domain from "./pages/Domain";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/diversity" element={<LiveDiversity />} />
        <Route path="/domains" element={<Domain/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
