import React from "react";
import { useState, useEffect } from "react";
import "./card.scss";

const Card = ({ propsName, propsSurname }) => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <div className="card">
      <input
        type="text"
        className="field"
        value={propsName}
        onChange={handleNameChange}
      />
      <input
        type="text"
        className="field"
        value={propsSurname}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default Card;
