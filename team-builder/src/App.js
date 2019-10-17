import React, { useState } from "react";

import TeamMember from "./components/TeamMember";
import TeamForm from "./components/TeamForm";
import EditForm from "./components/EditForm";

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

  const [editTeamate, setEditTeamate] = useState(false);
  const initialFormState = {
    id: null,
    name: "",
    age: "",
    location: "",
    languages: ""
  };
  const [currentTeamate, setCurrentTeamate] = useState(initialFormState);

  const editRow = mate => {
    setEditTeamate(true);
    setCurrentTeamate({
      id: Date.now(),
      name: mate.name,
      age: mate.age,
      location: mate.location,
      languages: mate.languages
    });
  };
  const updateTeamate = (id, updatedTeamate) => {
    setEditTeamate(false);
    setTeamate(
      teamates.map(teamate => (teamate.id === id ? updatedTeamate : teamate))
    );
  };

  return (
    <div className="App">
      <div className="edit-container">
        {editTeamate ? (
          <div>
            <h2>Edit Teamate</h2>
            <EditForm
              editTeamate={editTeamate}
              setEditTeamate={setEditTeamate}
              currentTeamate={currentTeamate}
              updateTeamate={updateTeamate}
            />
          </div>
        ) : (
          <TeamForm addNewTeamate={addNewTeamate} />
        )}
      </div>
      <TeamMember teamates={teamates} editRow={editRow} />
    </div>
  );
}

export default App;
