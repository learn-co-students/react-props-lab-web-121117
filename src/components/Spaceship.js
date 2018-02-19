// Code The Spaceship Component Here
import React from "react";

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h4>hasRockets:{this.props.hasRockets}</h4>
        <h5>Colors:{this.props.colors}</h5>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

export default Spaceship;
