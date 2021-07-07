import React, { useState } from "react";

const EditForm = props => {
  console.log("edit form" + props);
  const [teamate, setTeamate] = useState(props.currentTeamate);

  const handleEditChange = e => {
    const { name, value } = e.target;

    setTeamate({ ...teamate, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        props.updateTeamate(teamate.id, teamate);
      }}
    >
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleEditChange}
        value={teamate.name}
      />
      <label htmlFor="age">Age: </label>
      <input
        id="age"
        type="text"
        name="age"
        onChange={handleEditChange}
        value={teamate.age}
      />
      <label htmlFor="location">Location: </label>
      <input
        id="location"
        type="text"
        name="location"
        onChange={handleEditChange}
        value={teamate.location}
      />
      <label htmlFor="languages">Languages: </label>
      <input
        id="languages"
        type="text"
        name="languages"
        onChange={handleEditChange}
        value={teamate.languages}
      />
      <button>Update user</button>
      <button onClick={() => props.setEditTeamate(false)}>Cancel</button>
    </form>
  );
};

export default EditForm;
