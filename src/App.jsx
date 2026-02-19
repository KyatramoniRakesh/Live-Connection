import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CompanyPage from "./pages/CompanyPage";
import LiveDiversity from "./pages/LiveDiversity";
import Domain from "./pages/Domain";
import JobSearchPage from "./pages/JobSearchPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/diversity" element={<LiveDiversity />} />
        <Route path="/domains" element={<Domain/>} />
        <Route path="/jobs" element={<JobSearchPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
