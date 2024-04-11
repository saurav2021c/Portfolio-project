import React from "react";
import author from "../me.png";
const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p className="aboutme-para">
            As a final year BTech student majoring in Artificial Intelligence
            and Data Science, I'm truly passionate about utilizing technology to
            drive impactful solutions. Throughout my academic journey, I've
            honed my skills in Python, Advanced Excel, SQL, Power BI, and
            Machine Learning, gaining hands-on experience in project development
            and analysis within the data science domain. I'm proud to have been
            recognized for my contributions in over 5 hackathons, including
            achieving semi-finalist status in the prestigious Deep Blue
            Hackathon. I thrive in collaborative environments and love tackling
            complex challenges head-on.My expertise also extends to web scraping
            techniques, which I've used to efficiently gather and analyze data
            for various projects. Additionally, I'm actively sharpening my
            problem-solving abilities through LeetCode challenges and delving
            deeper into the realm of Big Data to stay ahead of evolving
            technologies.With a commitment to continuous learning and growth,
            I'm eager to explore new opportunities and make meaningful
            contributions in the dynamic field of data science. Let's connect
            and discuss how I can bring value to your team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
