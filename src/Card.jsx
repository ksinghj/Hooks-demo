import React from "react";
import { useState, useEffect } from "react";
import "./card.scss";

const Card = () => {
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <div className="card">
      <label>Name</label>
      <input
        type="text"
        className="field"
        value={name}
        onChange={handleNameChange}
      />
      <label>Surname</label>
      <input
        type="text"
        className="field"
        value={surname}
        onChange={handleSurnameChange}
      />
    </div>
  );
};

export default Card;
