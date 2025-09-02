import React, { useState } from "react";

const SkillList = React.memo(({ skills }) => {
  console.log("Rendering SkillList...");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

function ReactMemoDemo() {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.trim().length > 5) {
      setSkills([...skills, input]);
      setInput("");
    } else {
      alert("Skill must be more than 5 characters");
    }
  };

  return (
    <div>
      <h2>React.memo Demo</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter skill"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} />
    </div>
  );
}

export default ReactMemoDemo;
