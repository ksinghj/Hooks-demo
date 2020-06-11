import React from "react";
import "./styles.css";
import Card from "./Card";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>People cards</h1>
        <Card propsName="Mary" propsSurname="Poppins" />
      </div>
    </React.Fragment>
  );
};

export default App;
