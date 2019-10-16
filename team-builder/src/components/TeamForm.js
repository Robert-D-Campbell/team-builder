import React, { useState } from "react";

const TeamForm = props => {
  console.log(props);
  const [teamate, setTeamate] = useState({
    name: "",
    age: "",
    location: "",
    languages: ""
  });

  const handleChange = e => {
    console.log(teamate);
    setTeamate({ ...teamate, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeamate(teamate);
    setTeamate({
      name: "",
      age: "",
      location: "",
      languages: ""
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        value={teamate.name}
      />
      <label htmlFor="age">Age: </label>
      <input
        id="age"
        type="text"
        name="age"
        onChange={handleChange}
        value={teamate.age}
      />
      <label htmlFor="location">Location: </label>
      <input
        id="location"
        type="text"
        name="location"
        onChange={handleChange}
        value={teamate.location}
      />
      <label htmlFor="languages">Languages: </label>
      <input
        id="languages"
        type="text"
        name="languages"
        onChange={handleChange}
        value={teamate.languages}
      />
      <button type="submit">Add Teamate</button>
    </form>
  );
};

export default TeamForm;
