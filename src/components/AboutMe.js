import React from "react";
import author from "../me.JPG";
const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap">
             <img className="profile-img" src={author} alt="author..."/>
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
            <p className="aboutme-para">
            I am an ambitious and enthusiastic fourth-year undergraduate pursuing a B.Tech in A.I & Data Science. I am captivated by the ever-evolving landscape of A.I industry and constantly seek out new technologies and innovations to stay at the forefront.My expertise includes proficiency in Python and C++, along with a basic foundation in Java.  My explorations have extended to the fields of Machine Learning and Generative A.I, where I am excited to push boundaries and uncover groundbreaking solutions and learn things.In addition to my A.I and Data Science Knowledge, I possess a diverse range of technical skills which I explored. I am well-versed in HTML, CSS, ReactJs, NodeJs, Bootstrap, SQL, Mongodb, Flutter, Dart, OOPS, OpenCV, and Deep Learning. This extensive overview enables me to approach projects from a holistic perspective and deliver comprehensive solutions.I am eager to contribute my knowledge, skills, and passion to a dynamic organization that values innovation and growth. With a strong foundation in A.I and Data Science, coupled with a broad technical skill set, I am poised to make a remarkable impact and thrive in a fast-paced environment.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe