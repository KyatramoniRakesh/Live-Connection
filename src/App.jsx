import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CompanyPage from "./pages/companyPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
