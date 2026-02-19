import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaCrown,
    FaMapMarkerAlt,
    FaUserTie,
    FaWallet
} from "react-icons/fa";
import "../CSS/LiveJobResults.css";

const jobsData = [
    {
        id: 1,
        title: "AI / ML Manager",
        company: "Top MNC",
        location: "Mumbai",
        experience: "8+ Years",
        salary: "NA",
    },
    {
        id: 2,
        title: "Jira Development",
        company: "IT Services Company",
        location: "Bangalore",
        experience: "8-11 yrs",
        salary: "21 LPA",
    },
    {
        id: 3,
        title: "Adobe Campaign",
        company: "MNC",
        location: "Bangalore / Chennai",
        experience: "4-8 yrs",
        salary: "Best in Market",
    },
    // duplicate for demo
    { id: 4, title: "React Developer", company: "Startup", location: "Hyderabad", experience: "3-5 yrs", salary: "12 LPA" },
    { id: 5, title: "Python Backend", company: "Product Firm", location: "Pune", experience: "4+ yrs", salary: "15 LPA" },
    { id: 6, title: "Data Engineer", company: "MNC", location: "Delhi", experience: "5+ yrs", salary: "18 LPA" },
    { id: 7, title: "DevOps Engineer", company: "Cloud Firm", location: "Chennai", experience: "6 yrs", salary: "20 LPA" },
    { id: 8, title: "Frontend Lead", company: "Tech Co", location: "Remote", experience: "7+ yrs", salary: "22 LPA" },
    { id: 9, title: "Full Stack Dev", company: "IT Firm", location: "Mumbai", experience: "5 yrs", salary: "16 LPA" },
];

const LiveJobResults = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        setVisibleCount(jobsData.length);
    };

    return (
        <>
            <section className="live-jobs-section">
                <div className="live-jobs-container">

                    <h2 className="live-jobs-heading">
                        Found <span>2705 Jobs</span>
                    </h2>
                    <div className="live-jobs-underline"></div>

                    <div className="live-jobs-grid">
                        {jobsData.slice(0, visibleCount).map((job) => (
                            <div className="live-job-card" key={job.id}>

                                <div className="live-job-icon">
                                    <FaCrown />
                                </div>

                                <h3>{job.title}</h3>
                                <p className="live-company">{job.company}</p>

                                <div className="live-job-info">
                                    <FaMapMarkerAlt />
                                    <span>{job.location}</span>
                                </div>

                                <div className="live-job-info">
                                    <FaUserTie />
                                    <span>{job.experience}</span>
                                </div>

                                <div className="live-job-info">
                                    <FaWallet />
                                    <span>{job.salary}</span>
                                </div>

                                <div className="live-job-actions">
                                    <Link to={`/job/${job.id}`} className="live-apply-btn">
                                        Apply
                                    </Link>

                                    <Link to={`/job/${job.id}`} className="live-details-link">
                                        Show More Details
                                    </Link>
                                </div>

                            </div>
                        ))}
                    </div>

                    {visibleCount < jobsData.length && (
                        <div className="live-loadmore-wrapper">
                            <button onClick={loadMore} className="live-loadmore-btn">
                                Load More
                            </button>
                        </div>
                    )}

                </div>
            </section>
            
        </>
    );
};

export default LiveJobResults;
