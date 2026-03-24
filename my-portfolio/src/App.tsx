import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          &lt;  Somalia Jamall\ &gt;
        </div>
        <div>
          <p>
            Full stack developer - Focus in UX and Web
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
          <FontAwesomeIcon icon={faLinkedin} />
          
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
