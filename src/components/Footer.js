import React from "react";
import {Link} from "react-scroll";
import {
    FacebookShareButton,FacebookIcon,
    TwitterShareButton, TwitterIcon,
    LinkedinShareButton, LinkedinIcon,
    WhatsappShareButton, WhatsappIcon,
    
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 details">
                 <div className="d-flex">
                    <p>Mumbai, India</p>
                 </div>
                 <div className="d-flex">
                    <a href="tel:9768682165">+91 9768682165</a>
                 </div>
                 <div className="d-flex">
                    <a href="saurav2021c@gmail.com">saurav2021c@gmail.com</a>
                 </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6 ">
                    <div className="row footernavwrap">
                        <div className="col">
                            <Link to="home" className="footer-nav">Home</Link>
                            <br/>
                            <Link to="about" offset={5} duration={500}  className="footer-nav">About Me</Link>
                            <br/>
                            <Link to="skills" offset={0} duration={500} className="footer-nav">Skills</Link>
                        </div>
                        <div className="col">
                            <Link  to="experience" offset={0} duration={500} className="footer-nav">Experience</Link>
                            <br/>
                            <Link to="projects" offset={0} duration={500}  className="footer-nav">Projects</Link>
                            <br/>
                            <Link to="contacts" offset={0} duration={500}  className="footer-nav">Contacts</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 ">
                <p className="footershare">Share my Portfolio:</p>
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                        url={"https://saurav2021c.github.io/Portfolio-project/"}
                        quote={"Data Analyst"}
                        >
                            <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton>
                        <LinkedinShareButton
                        url={"https://saurav2021c.github.io/Portfolio-project/"}
                        quote={"Data Analyst"}
                        >
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                        <TwitterShareButton
                        url={"https://saurav2021c.github.io/Portfolio-project/"}
                        quote={"Data Analyst"}
                        >
                            <TwitterIcon className="mx-3" size={36}/>
                        </TwitterShareButton>
                        <WhatsappShareButton
                        url={"https://saurav2021c.github.io/Portfolio-project/"}
                        quote={"Data Analyst"}
                        >
                            <WhatsappIcon className="mx-3" size={36}/>
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
        </div>
        <p className="pt-3 text-center copyright">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Saurav Singh | All Right Reserved
                    </p>
    </div>
  )
}

export default Footer