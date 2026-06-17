
export default function Portfolio({ }) {
    return (
        <>
            <section className="portfolio-section">
                <h2>Auto Suggest a Purchase</h2>
                <img src="ASAP1.png" style={{ width: "100%" }} />
                <div className="portfolioContent">
                    <div className="subsection">
                        <div className="overline">Roles:</div>
                        Project Manager, Designer, Developer
                    </div>
                    <div className="subsection">
                        <div className="overline">Languages:</div>
                        React, PostgreSQL, PHP, Python
                    </div>
                </div>
                <div className="subsection">
                    <h3>The Problem: <span className="headerEmphasize">A Time Consuming Manual Process</span></h3>
                    The pre-existing process required librarians to manually track hundreds of book
                    purchase suggestions with emails and spreadsheets. This process was time consuming
                    and lacked transparency as communication often faltered between patrons and
                    librarians with extensive responsibilities.
                </div>
                <div className="subsection">
                    <h3>The Solution: <span className="headerEmphasize">Use tech to automate and streamline</span> </h3>
                    Auto Suggest a Purchase (ASAP): an application built with REACT, SQL, and PHP
                    that automates library-patron communications and streamlines book suggestions
                    by collecting patron suggestions for staff within a dashboard and automating
                    communications and holds.
                </div>
                <div className="subsection">
                    <h3>The Outcome: <span className="headerEmphasize">An Award Winning Application</span></h3>
                    Auto Suggest a Purchase has been locally and nationally recognized with the
                    program winning several awards, including a national library hackathon and an
                    innovation award from the North East Florida Library Information Network.
                    Additionally, I have collaborated with libraries in California, New York,
                    and Indiana to implement Auto Suggest a Purchase for their patrons following
                    the success demonstrated in the usage of the Jacksonville Public Library.
                </div>
                <div className="subsection">
                    <h3>My Process</h3>
                    <img src="asapProcessMap.png" className="portfolioImg" />
                    <div className="imageCaption">
                        <div className="subsection">
                            <div className="overline">Mapping the existing state</div>
                            I always start new projects by working with stakeholders to build an 
                            understanding of where they are today
                        </div>
                    </div>
                    <img src="asapIdealProcessMap.png" className="portfolioImg" />
                    <div className="imageCaption">
                        <div className="subsection">
                            <div className="overline">Mapping the ideal process</div>
                            After I develop an understanding of how things are, I work with stakeholders
                            to develope a vision for how things should be.
                        </div>
                    </div>
                    <img src="asapTechnicalDiagram.png" className="portfolioImg" />
                    <div className="imageCaption">
                        <div className="subsection">
                            <div className="overline">Technical Diagram</div>
                            Prior to writing any code, I map out how information moves between systems
                        </div>
                    </div>
                    <img src="asapCostBeniMatrix.png" className="portfolioImg" />
                    <div className="imageCaption">
                        <div className="subsection">
                            <div className="overline">Requirement weighting</div>
                            To plan and prioritize feature development, I work with stakeholders to create
                            a cost/benifit matrix. Those features that are easy to implement and high value get
                            worked on first.
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}