import React from "react";
import './componentcss/about.css';
const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I am a Computer Science Engineering student with a passion for
        technology and innovation. From a young age, I've been fascinated by the
        endless possibilities offered by computers and software, which led me to
        pursue a career in this dynamic field. Throughout my academic journey,
        I've developed a strong foundation in programming languages, algorithms,
        and software development methodologies. I thrive on challenges and enjoy
        exploring new technologies to stay at the forefront of the ever-evolving
        tech landscape. With a commitment to lifelong learning and a drive to
        make a positive impact, I am excited to embark on a journey of continual
        growth and innovation in the world of Computer Science.
      </p>
      <div className="education">
        <div className="pcollege colorize">
          <h2>Vasavi College of Engineering</h2>
          <h3>Bachelor of Engineering B.E</h3> 
          <h2 className="adde">CGPA: 8.46</h2>
        </div>
        <div className="scollege colorize">
          <h2>Narayana Junior College</h2>
          <h3>Intermediate</h3> 
          <h2 className="adde">percentage: 94.2%</h2>
        </div>
        <div className="school colorize">
        <h2>Valli High School</h2>
        <h3>SSC</h3> 
          <h2 className="adde">CGPA: 8.5</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
