import React from "react";
import "./componentcss/home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="homeleft">
        <h1>Kallemollu Upendra</h1>
        <h2>Programmer and Developer</h2>
        <p>
          I'm a front-end developer and aspiring programming enthusiast
          dedicated to crafting exceptional user experiences and exploring the
          depths of software development.
        </p>
        <div className="socialmedia">
          <a
            href="https://www.linkedin.com/in/kallemupendra/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/linkedIn.png")}
              alt=""
              className="linkedInimg"
            />
          </a>
          <a
            href="https://github.com/Upendra9728/MyProjects.git/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("../assets/git.png")} alt="" className="gitimg" />
          </a>
          <a
            href="https://www.instagram.com/upendra09728?igsh=MW4zeGZ4Yml3eTFkcA=="
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/insta.png")}
              alt=""
              className="instaimg"
            />
          </a>
        </div>
      </div>
      <div className="homeright">
        <img src={require("../assets/main.jpg")} alt="" className="mainimg" />

        <a className="hel"
          href="https://drive.google.com/file/d/1jhR46KWGmzDElxrvbkzk_Rbpg4pCpAwy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="buttonn resume">View Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
