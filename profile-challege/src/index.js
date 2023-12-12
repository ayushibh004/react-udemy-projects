import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "TypeScript",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Kotlin",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "C",
    level: "beginner",
    color: "#FF3B00",
  },
];

//image
function Avatar() {
  const imgUrl = "/profilePic.jpg";

  return <img className="avatar" src={imgUrl} alt="Profile" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillsList({ skillList }) {
  return (
    <>
      {skillList.map((s) => (
        <Skill skill={s.skill} level={s.level} color={s.color} />
      ))}
    </>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function App() {
  //inital values
  const initialDescription =
    "Technology analyst building knowledge in software development";

  //state
  const [name] = useState("Ayushi Bhawnani");
  const [description] = useState(initialDescription);

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name={name} description={description} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
          <SkillsList skillList={skills} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
