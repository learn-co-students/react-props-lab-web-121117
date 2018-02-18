// Code The Spaceship Component Here
import React from "react";
import ReactDOM from "react-dom";

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.speed}</li>
          <li>{this.props.colors.join(", ")}</li>
          <li>{this.props.hasRockets ? "Has Rockets" : "No Rockets"}</li>
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

ReactDOM.render;
