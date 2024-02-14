import React from "react";
import "./componentcss/work.css";
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Face Mask Detection using Python, OpenCV and Keras.",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "LED Distance Indicator using Ultrasonic Sensor & Buzzer.",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Amazon Clone Frontend Project using HTML, CSS and Javascript.",
    link: "https://example.com/project3",
  },
];

const Work = () => {
  return (
    <div className="maincointainer">
      <div className="internships">
        <h1>Internships</h1>
        <div className="internship1">
          <h3>Amazon ML Summer School 2023</h3>
          <p>
            This immersive program has been an incredible journey, providing me
            with invaluable insights and practical skills in the field of
            machine learning. Throughout the course, I've had the opportunity to
            learn from leading experts in the industry, explore cutting-edge
            techniques, and work on real-world projects that have deepened my
            understanding of ML concepts. From mastering algorithms to deploying
            models, the hands-on experience has been immensely rewarding. I'm
            excited to apply what I've learned to tackle complex challenges and
            drive innovation in my future endeavors. The Amazon ML Summer School
            has truly empowered me to confidently navigate the world of machine
            learning and make meaningful contributions to the field
          </p>
        </div>
        <div className="internship2">
          <h3>National Small Industries Corporation</h3>
          <p>
            I am excited to announce that I have successfully completed the live
            internship training program in Artificial Intelligence (AI) and
            Machine Learning (ML) offered by the National Small Industries
            Corporation (NSIC). This immersive experience has been incredibly
            rewarding, providing me with invaluable hands-on training and
            practical skills in AI and ML. Throughout the internship, I had the
            opportunity to work on real-world projects, collaborate with
            industry experts, and apply advanced algorithms to solve complex
            problems. The program's emphasis on experiential learning has not
            only deepened my understanding of AI and ML concepts but has also
            equipped me with the confidence and expertise to tackle challenges
            in this rapidly evolving field. I am grateful for the opportunity to
            be a part of this transformative experience and look forward to
            leveraging my newfound skills to drive innovation and make
            meaningful contributions in AI and ML.
          </p>
        </div>
      </div>
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
