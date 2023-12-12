import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function SkillList(props) {
  const color = props.color;

  return (
    <span className="skill" style={{ backgroundColor: color }}>
      {props.skill} {props.emoji}
    </span>
  );
}

function App() {
  //inital values
  const initialDescription =
    "Technology analyst building knowledge in software development";
  const initiallist = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
  ];
  const initalColors = [
    "lightblue",
    "lightgreen",
    "lightgray",
    "lightsalmon",
    "lavender",
    "lightseagreen",
  ];
  const initalEmojiList = ["👍🏻", "👍🏽"];

  //state
  const [name] = useState("Ayushi Bhawnani");
  const [description] = useState(initialDescription);
  const [skillsList] = useState(initiallist);
  const [colorList] = useState(initalColors);
  const [emojiList] = useState(initalEmojiList);

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name={name} description={description} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
          <SkillList
            skill={skillsList[0]}
            color={colorList[0]}
            emoji={emojiList[0]}
          />
          <SkillList
            skill={skillsList[1]}
            color={colorList[1]}
            emoji={emojiList[0]}
          />
          <SkillList
            skill={skillsList[2]}
            color={colorList[2]}
            emoji={emojiList[0]}
          />
          <SkillList
            skill={skillsList[3]}
            color={colorList[3]}
            emoji={emojiList[1]}
          />
          <SkillList
            skill={skillsList[4]}
            color={colorList[4]}
            emoji={emojiList[1]}
          />
          <SkillList
            skill={skillsList[5]}
            color={colorList[5]}
            emoji={emojiList[1]}
          />
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
