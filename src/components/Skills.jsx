import React from "react";
import "./componentcss/skills.css";

const skillsList = [
  { name: "Java", symbol: "♨️" },
  { name: "C", symbol: "🌐" },
  { name: "Python", symbol: "🐍" },
  { name: "HTML", symbol: "🔤" },
  { name: "CSS", symbol: "🎨" },
  { name: "JavaScript", symbol: "💻" },
  { name: "React.js", symbol: "⚛️" },
  { name: "Machine Learning", symbol: "🤖" },
  { name: "RDBMS", symbol: "🗄️" },
  { name: "SQL", symbol: "💾" },
  { name: "Data Structures", symbol: "🌲" },
  { name: "Algorithms", symbol: "🔍" },
];

const Skills = () => {
  return (
    <div className="container">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-tag">
            <span className="skill-name">{skill.name}</span>
            <span className="material-symbols-outlined">{skill.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
