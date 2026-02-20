import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CompanyPage from "./pages/CompanyPage";
import LiveDiversity from "./pages/LiveDiversity";
import Domain from "./pages/Domain";
import JobSearchPage from "./pages/JobSearchPage";

import Article from "./components/Article";

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
        

        {/* <Route path="/contact" element={<Contact/>} />
        <Route path='/findjobs' element={<FindJobPage/>}/>
       
        <Route path='/jobs/:jobslug' element={<Jobs/>}/> */}
 <Route path='/article/:articleslug'element={<Article/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
