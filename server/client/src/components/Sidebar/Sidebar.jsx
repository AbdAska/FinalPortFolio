import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.png'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  const [toggleNav, settoggleNav] = useState(true)
  const [navbtns, setnavbtns] = useState(true)

  const handleNav = () => {
    settoggleNav(!toggleNav);
    setnavbtns(!navbtns);
  }
  return (
    <>
    <menu className="main-menu">
      <div className="main-menu-top">
        <Link className='logo' to='/'><img src={Logo} alt="logo" /><span>Askari</span></Link>
        <span>Web Developer</span>
      </div>
      <nav className="main-menu-links">
        <Link to='/About' >About</Link>
        <Link to='/Skills'>Skills</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
      <ul className="social">
        <li><a
            href="https://www.linkedin.com/in/asadleghari"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={faLinkedin}/>
        </a></li>
        <li><a
            href="https://github.com/AbdAska"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={faGithub}/>
        </a></li>
        <li><a
            href="https://www.twitter.com/asadleghari"
            rel="noreferrer"
            target="_blank"
        >
            <FontAwesomeIcon icon={faTwitter}/>
        </a></li>
      </ul>
    </menu>
    <menu onClick={handleNav} className={toggleNav ? "main-menus close-menu" : "main-menus"}>
      <div className="main-menu-top">
        <Link className='logo' to='/'><img src={Logo} alt="logo" /><span>Asad</span></Link>
        <span>Web Developer</span>
      </div>
      <nav className="main-menu-links">
        <Link to='/About' >About</Link>
        <Link to='/Skills'>Skills</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
      <ul className="social">
        <li><a
            href="https://www.linkedin.com/in/asadleghari"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={faLinkedin}/>
        </a></li>
        <li><a
            href="https://github.com/Asad-Leghari"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={faGithub}/>
        </a></li>
        <li><a
            href="https://www.twitter.com/asadleghari"
            rel="noreferrer"
            target="_blank"
        >
            <FontAwesomeIcon icon={faTwitter}/>
        </a></li>
      </ul>
    </menu>
    <div className="navBtn-Container"><FontAwesomeIcon onClick={handleNav} icon={navbtns ? faBars : faXmark} className='fa-2x navBtn' /></div>
    </>
  )
}

export default Sidebar