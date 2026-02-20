import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CompanyPage from "./pages/CompanyPage";
import LiveDiversity from "./pages/LiveDiversity";
import Domain from "./pages/Domain";
import FindJobPage from "./pages/FindJobPage";
import Article from "./components/Article";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";

import ScrollToTop from "./js/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/diversity" element={<LiveDiversity />} />
        <Route path="/domains" element={<Domain />} />
        <Route path="/jobs" element={<FindJobPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path='/article/:articleslug' element={<Article />} />
        <Route path='/jobs/:jobslug' element={<Jobs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
