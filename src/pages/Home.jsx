import "../CSS/Home.css";
import desktopBanner from "../images/livec_1.webp";
import JobSearch from "../components/JobSearch";
import TeamLive from "../components/TeamLive";
import Jobposting from "../components/Jobposting";
import { recentjobs } from "../js/Jobpost.js";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };
  const goToServices =() =>{
    navigate('/services')
  }
  return (
    <>
      <section
        className="LIVE-hero"
        style={{ backgroundImage: `url(${desktopBanner})` }}
      >
        <div className="LIVE-hero-overlay">
          <div className="LIVE-hero-content">
            <h1 className="LIVE-hero-title">
              A Passion <br />
              for Placing <br />
              People First
            </h1>

            <div className="LIVE-hero-underline"></div>

            <p className="LIVE-hero-description">
              A quarter century of partnering with exceptional clients and
              candidates across sectors, functions and geographies.
            </p>

            <div className="LIVE-hero-buttons">
              <button className="LIVE-btn-primary" onClick={goToContact}
                style={{ cursor: "pointer" }}>
                Know More About Us
              </button>

              <button className="LIVE-btn-secondary" onClick={goToServices}
                style={{ cursor: "pointer" }}>
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
      <JobSearch />

      <TeamLive />

      <Jobposting jobs={recentjobs} />




    </>
  );
};

export default Home;
