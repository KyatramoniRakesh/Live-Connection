import React, { useState } from "react";
import "../CSS/JobSearchPage.css";
import LiveJobResults from "../components/LiveJobResults";
import { Link } from "react-router-dom";

const JobSearchPage = () => {

    const [filters, setFilters] = useState({
        keyword: "",
        location: "",
        industry: ""
    });

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const handleClear = () => {
        setFilters({
            keyword: "",
            location: "",
            industry: ""
        });
    };

    return (
        <>

            <section className="live-jobsearch-section">
                <div className="live-jobsearch-container">

                    <h1 className="live-jobsearch-title">
                        Find Your dream job.
                    </h1>

                    <div className="live-jobsearch-form-wrapper">

                        {/* Job Title */}
                        <div className="live-jobsearch-field">
                            <label>Job Title or Keyword</label>
                            <select
                                name="keyword"
                                value={filters.keyword}
                                onChange={handleChange}
                            >
                                <option value="">- Select -</option>
                                <option value="AI">AI</option>
                                <option value="Developer">Developer</option>
                            </select>
                        </div>

                        {/* Location */}
                        <div className="live-jobsearch-field">
                            <label>Location</label>
                            <select
                                name="location"
                                value={filters.location}
                                onChange={handleChange}
                            >
                                <option value="">- Select -</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Bangalore">Bangalore</option>
                            </select>
                        </div>

                        {/* Industry */}
                        <div className="live-jobsearch-field">
                            <label>Industry</label>
                            <select
                                name="industry"
                                value={filters.industry}
                                onChange={handleChange}
                            >
                                <option value="">- Select -</option>
                                <option value="IT">IT</option>
                                <option value="EEE">EEE</option>
                            </select>
                        </div>

                        {/* Button Column */}
                        <div className="live-jobsearch-button-wrapper">

                            {/* fake label spacing for alignment */}
                            <div className="live-jobsearch-label-space"></div>

                            <button className="live-jobsearch-btn">
                                Search&nbsp;&nbsp;2705 Jobs
                            </button>

                            <span
                                className="live-jobsearch-clear"
                                onClick={handleClear}
                            >
                                Clear all
                            </span>

                        </div>

                    </div>
                </div>
            </section>
            <LiveJobResults />
            <section className="live-resume-section">
                <div className="live-resume-container">

                    <h2 className="live-resume-heading">
                        Did not find a suitable job. Leave your resume behind
                        and we shall find one.
                    </h2>

                    <Link to="/submit-resume" className="live-resume-btn">
                        Submit Resume
                    </Link>

                </div>
            </section>
        </>
    );
};

export default JobSearchPage;
