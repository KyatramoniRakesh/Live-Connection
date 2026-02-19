import React, { useState } from "react";
import "../CSS/Domainspecialities.css";

import travelImage from "../images/travel.png";
import retailImage from "../images/retail.png";
import educationImage from "../images/education.png";
import energyImage from "../images/energy.png";

const DomainSpecialities = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const domains = [
    {
      title: "Travel & Hospitality",
      image: travelImage,
      description:
        "At LiveC, we have a separate team dedicated to cater to the hospitality & travel sector. We place across levels, functions and geographies."
    },
    {
      title: "Retail & E-Commerce",
      image: retailImage,
      description:
        "We have had a ring side view to India’s Retail boom and established strong partnerships across retail & ecommerce domains."
    },
    {
      title: "Education",
      image: educationImage,
      description:
        "We support leading education institutions with leadership and functional hiring solutions."
    },
    {
      title: "Power & Energy",
      image: energyImage,
      description:
        "We partner with power & energy organizations, sourcing talent across engineering, operations and leadership roles."
    }
  ];

  const visibleDomains = showAll ? domains : domains.slice(0, 2);

  return (
    <section className="live-other-domains">

      {/* Header */}
      <div className="live-other-domains-header live-fade-up live-delay-1">
        <h2 className="live-other-domains-title">
          Explore our other domain specialities
        </h2>

        <button
          className="live-other-domains-toggle"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>

      {/* Grid */}
      <div className="live-other-domains-grid">
        {visibleDomains.map((item, index) => (
          <div
            key={index}
            className="live-other-domain-card live-fade-up"
          >

            {/* Image */}
            <div className="live-other-domain-image">
              <img src={item.image} alt={item.title} />
              <div className="live-other-domain-overlay">
                <h3>{item.title}</h3>
                <div className="live-other-domain-underline"></div>

                <button
                  className="live-other-domain-btn"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Expand Content */}
            {activeIndex === index && (
              <div className="live-other-domain-content">
                <p>{item.description}</p>
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
};

export default DomainSpecialities;
