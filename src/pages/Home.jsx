import "../CSS/Home.css";
import desktopBanner from "../images/livec_1.webp";
import mobileBanner from "../images/HB_mobile.webp";
import JobSearch from "../components/JobSearch";

const Home = () => {
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
              <button className="LIVE-btn-primary">
                Know More About Us
              </button>

              <button className="LIVE-btn-secondary">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
      <JobSearch/>

    </>
  );
};

export default Home;
