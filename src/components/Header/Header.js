import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="scores">
      <h1>Score: {props.score} </h1>
      <h1>Highscore: {props.highscore}</h1>
    </div>
  </div>
);

export default Header;
