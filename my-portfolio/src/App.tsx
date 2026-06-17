import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import './App.css'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box'
import Resume from './resume'
import Portfolio from './portfolio'



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

  const [tab, setTab] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

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

      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', borderTop: '1px solid var(--border)' }}>
          <TabList onChange={handleChange}>
            <Tab label="Resume" value="1" sx={{color:"#fff"}} />
            <Tab label="Portfolio" value="2" sx={{color:"#fff"}} />
          </TabList>
        </Box> 
        <TabPanel value="1"><Resume/></TabPanel>
        <TabPanel value="2"><Portfolio/></TabPanel>
      </TabContext>

      <div className="ticks"></div>


      <section id="footer">
        {nameLogo}
      </section>

    </>
  )
}

export default App
