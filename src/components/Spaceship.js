// Code The Spaceship Component Here

import React from "react";

class Spaceship extends React.Component {
  render() {
    // always render classes
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h3>hasRockets: {this.props.hasRockets}</h3>
        <h4>Colors:{this.props.colors}</h4>
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
