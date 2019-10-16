import React from "react";

const TeamMember = props => {
  console.log(props);
  return (
    <div className="team-list">
      {props.teamates.map(teamate => (
        <div className="teamate" key={teamate.id}>
          <h2>Name: {teamate.name}</h2>
          <h3>Age: {teamate.age}</h3>
          <h3>Location: {teamate.location}</h3>
          <h4>Languages: {teamate.languages}</h4>
          <button>Edit Teamate</button>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;
