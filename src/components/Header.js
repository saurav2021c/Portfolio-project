import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <>
    <div id="home" className="header-wraper">
        <div className="main-info">
            <h3>Hi ! It's</h3>
            <h1>Saurav Bhushan Singh</h1>
            <h3>I am </h3>
           
            <Typed
               className="typed-text"
               strings={["a 4th year student." , "currently pursuing B.Tech in A.I and Data Science" , "a student of TCET, Mumbai." , "a Data Analyst." , "a Machine Learning Enthusiast.", "a Web Developer." , "learning Data Structure and Algorithms."]}
               typeSpeed={40}
               backSpeed={40}
               loop
               />
               <a href="https://www.linkedin.com/in/sauravsinghhhh/" className="btn-main-offer">Resume</a>
        </div>
    </div>
    </>
  )
}

export default Header
