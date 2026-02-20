import React from 'react'
import servicebanner from '../images/servicebanner.png'
import servicebanner2 from '../images/servicebanner2.png'
import servicebanner3 from '../images/servicebanner3.svg'
import servicebanner4 from '../images/servicebanner4.svg'
import servicebanner5 from '../images/servicebanner5.webp'
import servicebanner6 from '../images/servicebanner6.webp'

import '../CSS/Service.css'
import '../CSS/Service2.css'
import '../CSS/Service3.css'

import { useNavigate } from 'react-router-dom'

import HrResource from '../components/HrResource'

function Services() {

    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/contact");
    };


    return (
        <>
            <section className="serv-hero">


                <div className="serv-hero-left">

                    <h1 className="serv-fadeup">
                        A People-First Approach
                        <br />
                        Can Positively Impact the
                        <br />
                        Future of Your Business
                    </h1>

                    <p className="serv-fadeup serv-delay-1">
                        We, at LiveC, are strategic talent partners for global corporates,
                        providing holistic solutions since 1996. Our services span multiple
                        sectors and functions across geographies worldwide.
                    </p>


                    <div className="serv-btn serv-fadeup serv-delay-2" onClick={goToContact}
                        style={{ cursor: "pointer" }}>
                        Talk to our Expert
                    </div>

                </div>

                <div className="serv-hero-right">
                    <img src={servicebanner} alt="Services Illustration" />
                </div>

            </section>

            <section className="serv-search">

                <img
                    src={servicebanner2}
                    alt="Search Capabilities"
                    className="serv-search-img"
                />

                <div className="serv-search-overlay"></div>

                <div className="serv-search-content serv-fadeup">
                    <h2 className="serv-search-title">Search < br /> Capabilities</h2>
                </div>

            </section>

            <section className="serv-approach">


                <div className="serv-approach-left">

                    <p className="serv-top-text serv-fadeup">
                        Our bespoke approach to search lays emphasis on understanding the
                        needs of clients and candidates that would help them bring and build
                        mutual value.
                    </p>

                    <h3 className="serv-fadeup serv-delay-1">
                        The Client’s Brand Ambassador
                    </h3>

                    <p className="serv-fadeup serv-delay-2">
                        It’s important for us at LiveC to be seen as every client’s ambassador.
                        That’s how we are able to impart the most value. And it plays a big role
                        in search – allowing us to find qualified candidates in a cost-effective
                        and work-efficient manner.
                    </p>

                    <h3 className="serv-fadeup serv-delay-3">
                        Best Fit Candidates
                    </h3>

                    <p className="serv-fadeup serv-delay-4">
                        We keep sharpening our approach to search to be on top of market.
                        This helps us in finding, getting to know and placing candidates that
                        are the best fit for your business.
                    </p>


                    <div className="serv-btn serv-fadeup serv-delay-5" onClick={goToContact}
                        style={{ cursor: "pointer" }}>
                        Talk to our Expert
                    </div>

                </div>


                <div className="serv-approach-right serv-fadeup serv-delay-2">

                    <h2 className="serv-approach-title">Our Approach</h2>

                    <ul className="serv-approach-list">
                        <li>Understanding clearly the client mandate.</li>
                        <li>Intelligent Research to map target companies.</li>
                        <li>Wish list of 'people' based on Intelligent Research.</li>
                        <li>Reach out to potentials as the client's brand ambassador.</li>
                        <li>Meet and understand their needs, preferences and aspirations.</li>
                        <li>Work with them in showcasing their resume and creating a leadership dashboard.</li>
                        <li>Present resumes, facilitate meetings and close successfully.</li>
                        <li>Lock in the best fit candidate for placement.</li>
                    </ul>

                </div>

            </section>


            <section className="serv-interview">


                <div className="serv-interview-img">
                    <img src={servicebanner3} alt="Interview Service" />
                </div>


                <div className="serv-interview-content">

                    <h2 className="serv-interview-title serv-fadeup">
                        Interview as <br /> a Service
                    </h2>

                    <p className="serv-highlight serv-fadeup">
                        LiveC helps corporates address today’s recruitment challenges viz
                        no-show, declines, reneges etc., effectively and efficiently.
                    </p>

                    <p className="serv-fadeup">
                        We provide you with contract interviewers and specialists with
                        technical capabilities and expertise in the latest hiring technologies
                        to help overcome roadblocks. What you get in the process is a
                        streamlined and efficient HR department with time enough to attend to
                        more pressing deliverables.
                    </p>

                    {/* DIV Button */}
                    <div className="serv-btnn serv-fadeup" onClick={goToContact}
                        style={{ cursor: "pointer" }}>
                        Talk to our Expert
                    </div>

                </div>

            </section>

            <section className="serv-quote">

                <div className="serv-quote-container">

                    <p className="serv-quote-text serv-fadeup">
                        We're head-hunters at heart, having evolved right from before
                        the Internet 2.0 days to the current disruptive technologies,
                        and in the process, we have become more creative.
                    </p>

                </div>

            </section>

            <section className="serv-contingency">


                <div className="serv-contingency-content">

                    <h2 className="serv-contingency-title serv-fadeup">
                        Contingency <br /> Recruitment
                    </h2>

                    <p className="serv-highlight serv-fadeup">
                        In contingency scenarios, our proprietary search engine,
                        built on a robust platform, helps us reduce our response
                        time and deliver with speed and accuracy.
                    </p>

                    <p className="serv-fadeup">
                        Our specialty is our capability to work across sectors to
                        manage need-based recruitment. Our work spanning varied
                        industries has helped us build versatility in our system
                        and the required depth to hire for varying degrees of
                        complexity.
                    </p>


                    <div className="serv-btnn serv-fadeup" onClick={goToContact}
                        style={{ cursor: "pointer" }}>
                        Talk to our Expert
                    </div>

                </div>


                <div className="serv-contingency-img">
                    <img src={servicebanner4} alt="Contingency Recruitment" />
                </div>

            </section>

            <section className="serv-staffing">

                {/* LEFT IMAGE */}
                <div className="serv-staffing-img">
                    <img src={servicebanner5} alt="Staffing Services" />
                </div>

                {/* RIGHT CONTENT */}
                <div className="serv-staffing-content">

                    <h2 className="serv-staffing-title serv-fadeup">
                        Staffing <br /> Services
                    </h2>

                    <p className="serv-highlight serv-fadeup">
                        We can help with hiring the right talent to work on your site,
                        manage their payroll, statutory compliances, appraisals and raises.
                    </p>

                    <p className="serv-fadeup">
                        In a nutshell, with our staffing services, we help corporates
                        efficiently manage their workforce without getting into the
                        nitty-gritties of administration, thereby freeing them for
                        core competencies.
                    </p>

                    <p className="serv-fadeup">
                        We have a 400+ member dedicated team and we are highly flexible
                        in our offerings, with both contract and contract-to-hire terms.
                    </p>


                    <div className="serv-btnn serv-fadeup" onClick={goToContact}
                        style={{ cursor: "pointer" }}>
                        Talk to our Expert
                    </div>

                </div>

            </section>

            <section className="serv-incubating">


                <div className="serv-incubating-top">

                    <div className="serv-incubating-container">

                        <p className="serv-incubating-text serv-fadeup">
                            We've also built a vast and validated database of candidates
                            in various domains across Asia Pacific, the Middle East and
                            India that could come to your aid.
                        </p>

                        <div className="serv-incubating-link serv-fadeup" onClick={goToContact}
                            style={{ cursor: "pointer" }}>
                            Contact Us
                        </div>

                    </div>

                </div>


                <div className="serv-incubating-banner">

                    <img src={servicebanner6} alt="Global In-House Centers" />

                    <div className="serv-incubating-overlay"></div>

                    <div className="serv-incubating-title serv-fadeup">
                        Incubating <br />
                        Global In-House <br />
                        Centers
                    </div>

                </div>

            </section>

            <section className="serv-scope">


                <h2 className="serv-scope-heading serv-fadeup">
                    Are you a large company looking to leverage technology and
                    people cost by establishing a footprint in India? Let's Talk!
                </h2>


                <div className="serv-scope-grid">


                    <div className="serv-scope-col serv-fadeup">
                        <p>
                            India remains the preferred location, accounting for half
                            of all global in-house centers and is continuing to grow.
                            Banking/Financial Services, Technology, manufacturing,
                            distribution and retail firms are the biggest users of
                            captive centres.
                        </p>

                        <p>
                            There is growing adoption of the model by smaller firms too.
                        </p>

                        <div className="serv-btn" onClick={goToContact}
                            style={{ cursor: "pointer" }}
                        >Talk to our Expert</div>
                    </div>


                    <div className="serv-scope-col serv-fadeup">
                        <p>
                            In 2012, there were about 760 GICs operating out of India
                            and that number has gone beyond 1000 in 2015.
                        </p>

                        <p>
                            GICs operate in India across all service lines – IT services,
                            BPO, Engineering Services and Software Engineering and Development.
                        </p>
                    </div>


                    <div className="serv-scope-col serv-fadeup">

                        <h3 className="serv-scope-title">
                            Our Scope of Services
                        </h3>

                        <ul className="serv-scope-list">
                            <li>We can help you establish your business entity.</li>
                            <li>Identify office space and handle SEZ clearances.</li>
                            <li>Hire leaders/talent locally.</li>
                            <li>
                                Provide technical infrastructure and ensure smooth operations.
                            </li>
                        </ul>

                    </div>

                </div>

            </section>


            <section className="serv-rpo">


                <h2 className="serv-rpo-title serv-fadeup">
                    Requirement <br />
                    Process Outsourcing
                </h2>

                <p className="serv-rpo-intro serv-fadeup">
                    Are you anticipating a high, specific, complex, and time bound
                    hiring process across multiple locations? Our RPO offering
                    could help you meet your goals efficiently.
                </p>


                <div className="serv-rpo-grid">


                    <div className="serv-rpo-col serv-fadeup">
                        <p>
                            At LiveC, we've garnered crucial skills working with several
                            MNC giants as their Recruitment Process Outsourcing Partner.
                        </p>

                        <p>
                            Our trained recruiters function seamlessly with back-office
                            sourcing teams to close multiple hires.
                        </p>

                        <p>
                            Our large candidate database and community reach have always
                            been key reasons to success.
                        </p>
                    </div>


                    <div className="serv-rpo-col serv-fadeup">

                        <h3 className="serv-rpo-subtitle">
                            Our KRAs include
                        </h3>

                        <ul className="serv-rpo-list">
                            <li>Front-ending the hiring process.</li>
                            <li>Fleshing out Job Descriptions.</li>
                            <li>Collaborating with back-office teams.</li>
                            <li>Co-ordinating interviews.</li>
                            <li>Managing candidate experience.</li>
                            <li>Stakeholder management.</li>
                            <li>Negotiations & offer rollout.</li>
                            <li>Analytics & dashboards.</li>
                        </ul>

                    </div>


                    <div className="serv-rpo-col serv-fadeup">

                        <ul className="serv-rpo-list">
                            <li>Organizing recruitment drives.</li>
                            <li>Working with client teams post-offer.</li>
                            <li>Reducing "no-joins".</li>
                            <li>Immediate red-flagging of delays.</li>
                        </ul>

                    </div>

                </div>


                <div className="serv-rpo-btn serv-btn serv-fadeup" onClick={goToContact}
                    style={{ cursor: "pointer" }}>
                    Talk to our Expert
                </div>


            </section>

            <section className="serv-final">

                <div className="serv-final-container">

                    <p className="serv-final-text serv-fadeup">
                        LiveC. A quarter century of partnering with exceptional clients
                        and candidates across sectors, functions and geographies —
                        with solutions tailor-made for industry specific needs.
                        How can we help you?
                    </p>

                    <div className="serv-final-btn serv-fadeup">
                        Explore our specialties
                    </div>

                </div>

            </section>

            <HrResource />



        </>
    )
}

export default Services