import React, { useState } from "react";

import TeamMember from "./components/TeamMember";
import TeamForm from "./components/TeamForm";

function App() {
  const [teamates, setTeamate] = useState([
    {
      id: 1,
      name: "Robert Campbell",
      age: 28,
      location: "Not Alaska",
      languages: "html, css, javaScript, ReactJS"
    }
  ]);

  const addNewTeamate = mate => {
    const newTeamate = {
      id: Date.now(),
      name: mate.name,
      age: mate.age,
      location: mate.location,
      languages: mate.languages
    };
    setTeamate([...teamates, newTeamate]);
  };

  return (
    <div className="App">
      <TeamForm addNewTeamate={addNewTeamate} />
      <TeamMember teamates={teamates} />
    </div>
  );
}

export default App;
