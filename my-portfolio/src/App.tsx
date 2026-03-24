import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import './App.css'

const nameLogo =
  <>
    <div className="hero bouncing-letters">
      <span>&lt;</span>
      <span>S</span>
      <span>o</span>
      <span>m</span>
      <span>a</span>
      <span>l</span>
      <span>i</span>
      <span>a</span>
      <span> </span>
      <span>J</span>
      <span>a</span>
      <span>m</span>
      <span>a</span>
      <span>l</span>
      <span>l</span>
      <span>\</span>
      <span>&gt;</span>
    </div>
  </>

function App() {

  return (
    <>
      <section id="center">
        {nameLogo}
        <div>
          <p>
            Somalia Jamall
          </p>
          <p>
            Full stack developer
          </p>
          <p>
            Specialties in UX and Web Development
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="about-me">
        <div id="docs">
          <h2>
            <span className="material-symbols-outlined sectionIcon">
              psychology_alt
            </span>
            Skills
          </h2>
          <p className="overline">Languages and Frameworks</p>
          React, Angular, C++, Python, Typescript/ Javascript, PHP, PostGreSQL, MongoDB, MySQL/MariaDB, MSSQL, HTML, CSS, Javascript
          <p className="overline">Software</p>
          Visual Studio Code, NPM/Node.js, Figma, Windows Powershell, Linux Command Line, Azure DevOps, GIT, Docker, ISS, Apache, LAMP


        </div>
        <div id="social">
          <h2>
            <span className="material-symbols-outlined sectionIcon">
              forward_to_inbox
            </span>
            Contact
          </h2>
          <p className="overline">Email</p>
          SomaliaJamall@gmail.com
          <p className="overline">Phone</p>
          904-537-8670
          <p className="overline">Socails</p>
          <a href="https://www.linkedin.com/in/somalia-jamall-97773513a/">
            <FontAwesomeIcon className="font-awesome-icon" icon={faLinkedin} />
          </a>
          <a href="https://github.com/SomaliaJamall">
            <FontAwesomeIcon className="font-awesome-icon" icon={faGithubAlt} />
          </a>

        </div>
      </section>
      <section id="resume">
        <div id="resume-jobs">
          <h2>
            <span className="material-symbols-outlined sectionIcon">
              docs
            </span>
            Experience
          </h2>
          <div className='resume-section'>
            <p className="overline">
              Full Stack Software Engineer
            </p>
            <p>
              TxRx Data, Jacksonville FL
            </p>
            <p>
              October 2024 - Current
            </p>
            <p>
              <ul>
                <li>
                  Managed a team of developers in creating an application encompassing a frontend, REST API, and backend for a video transmission application, leading to the production of a market ready product.
                </li>
                <li>
                  Wrote and maintained code using React, Node.js, Git, C++, and other tools producing a well documented and scalable code repository.
                </li>
              </ul>
            </p>
          </div>
          <div className='resume-section'>
            <p className="overline">
              System Admin and App Developer
            </p>
            <p>
              Jacksonville Public Library, Jacksonville FL
            </p>
            <p>
              September 2024 - Current
            </p>
            <p>
              <ul>
                <li>
                  Spearheaded the development of tools for staff and patrons using React, PHP, Python, SQL Server, and other languages/tools depending on the use case to produce web applications supporting the Jacksonville Public Library’s over 1 million patrons and over 500 staff in a way that prioritized scalability and usability, leading to an increase in staff and patron satisfaction.
                </li>
                <li>
                  Managed the product lifecycle including defining requirements by performing UX research and cost/benefit analysis.
                </li>
                <li>
                  Managed the CI/CD pipeline for library applications using Azure to ensure all code is well tested and production ready.
                </li>
                <li>
                  Created and documented system processes to increase cross team transparency and collaboration.
                </li>
              </ul>
            </p>
          </div>
          <div className='resume-section'>
            <p className="overline">
              Senior UX Designer

            </p>
            <p>
              Arrive Logistics, Austin TX (Onsite)
            </p>
            <p>
              January 2021 - June 2023
            </p>
            <p>
              <ul>
                <li>
                  Orchestrated research initiatives to untangle intricate business challenges across diverse teams, leading to a 20% increase in commission accuracy and a 30% reduction in shipment processing time.
                </li>
                <li>
                  Produced UI mocks and prototypes using Figma, expediting initial idea validation and ensuring seamless developer handoff.
                </li>
                <li>
                  Guided and mentored junior designers in the nuances of UX research techniques, fostering their skills, resulting in improvements in their ability to conduct insightful user interviews
                </li>
              </ul>
            </p>
          </div>
          <div className='resume-section'>
            <p className="overline">
              UX Engineer
            </p>
            <p>
              Blackbaud Inc, Charleston SC (Hybrid)
            </p>
            <p>
              June 2019 - December 2020
            </p>
            <p>
              <ul>
                <li>
                  Utilized Angular to build components for an internal design system leading to faster design and development of new features.
                </li>
                <li>
                  Gathered feedback from  UX designers to create processes for design documentation and prototyping leading to better cohesion between projects.
                </li>
                <li>
                  Collaborated with product managers and developers to perform low/high fidelity prototyping, and usability testing to support rapid idea validation.
                </li>
              </ul>
            </p>
          </div>
          <div className='resume-section'>
            <p className="overline">
              Lead Full Stack Developer

            </p>
            <p>
              T21 Technologies, Fl
            </p>
            <p>
              April 2016 - December 2017
            </p>
            <p>
              <ul>
                <li>
                  Worked in React, Python, C++, JavaScript, HTML, and CSS to write full-stack code leading to an application that generated revenue for the company and later sold
                </li>
                <li>
                  Managed the code repository using GIT to support developer collaboration and code maintainability.
                </li>
                <li>
                  Trained and managed a team of interns and junior developers to increase the overall quality of code written by all contributors.
                </li>
                <li>
                  Collaborated with the CEO and international partners to prioritize and plan the development of new features insuring that high priority features were delivered rapidly
                </li>
              </ul>
            </p>
          </div>
          <div className='resume-section'>
            <p className="overline">
              Full Stack Developer
            </p>
            <p>
              T21 Technologies, Fl
            </p>
            <p>
              June 15 - May 16
            </p>
            <p>
              <ul>
                <li>
                  Collaborated with other engineers to write full-stack code for an embedded system using Python, C, React,  Javascript, HTML, and CSS to produce well documented and easy to maintain code.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section id="education">
        <div id="schools">
          <h2>
            <span className="material-symbols-outlined sectionIcon">
              school
            </span>
            Education
          </h2>
          <div className='degree'>
            <p className="overline">
              Master of Human-Computer Interaction Design
            </p>
            <p>
              The University of Indiana Bloomington (August 2017 - May 2019)
            </p>
          </div>
          <div className='degree'>
            <p className="overline">
              Bachelor of Science in Computer Science
            </p>
            <p>
              The University of North Florida, Jacksonville, FL(August 2012 - April 2016)
            </p>
          </div>
        </div>
      </section>
      <section id="footer">
        {nameLogo}
      </section>

    </>
  )
}

export default App
