import React from "react";
import { Crown, MapPin, Sparkles, CreditCard } from "lucide-react";
import '../CSS/Jobpostings.css'


function Jobposting({ jobs }) {

    const handleApply = () => {
        window.location.href = "/contact-enquiry";
    };

    return (
        <section className="job-section">

            {/* ===== HEADER ===== */}

            <div className="job-header">

                <div className="job-header-item">
                    <Crown className="header-icon" />
                    Title
                </div>

                <div className="job-header-item">
                    <MapPin className="header-icon" />
                    Location
                </div>

                <div className="job-header-item">
                    <Sparkles className="header-icon" />
                    Experience
                </div>

                <div className="job-header-item">
                    <CreditCard className="header-icon" />
                    Remuneration
                </div>

                {/* Empty column for alignment */}
                <div></div>

            </div>

            {/* ===== JOB ROWS ===== */}

            {jobs.map((job) => (
                <div className="job-card" key={job.id}>

                    {/* Title */}
                    <div className="job-col jobpost-title">
                        <Crown className="job-icon" />
                        <div>
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="job-col">
                        <MapPin className="job-icon" />
                        <span>{job.location}</span>
                    </div>

                    {/* Experience */}
                    <div className="job-col">
                        <Sparkles className="job-icon" />
                        <span>{job.experience}</span>
                    </div>

                    {/* Salary */}
                    <div className="job-col">
                        <CreditCard className="job-icon" />
                        <span>{job.salary}</span>
                    </div>

                    {/* Actions */}
                    <div className="job-actions">

                        <div className="job-apply-btn" onClick={handleApply}>
                            Apply
                        </div>

                        <div className="job-details-btn">
                            Show More Details
                        </div>

                    </div>

                </div>
            ))}

            <div className="show-all-container">
                <div className="show-all-btn">
                    Show All Jobs
                </div>
            </div>

        </section>
    );
}

export default Jobposting;
