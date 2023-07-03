import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";
//React fonawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">

    <a className="navbar-brand" href="https://www.linkedin.com/in/sauravsinghhhh/"> <img className="logo" src={logo} alt="logo..."/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <Link  to="home" className="nav-link" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link   to="about" offset={5} duration={500} className="nav-link" href="#">About Me</Link>
        </li>
        <li className="nav-item">
          <Link   to="skills" offset={0} duration={500} className="nav-link" href="#">Skills</Link>
        </li>
        <li className="nav-item">
          <Link   to="experience" offset={0} duration={500} className="nav-link" href="#">Experience</Link>
        </li>
        <li className="nav-item">
          <Link   to="projects" offset={0} duration={500} className="nav-link" href="#">Projects</Link>
        </li>
        <li className="nav-item">
          <Link   to="contacts" offset={0} duration={500} className="nav-link" href="#">Contacts</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar